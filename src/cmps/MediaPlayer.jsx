import { useContext, useEffect, useRef } from "react"
import { PlayerContext } from '../App'
import { utilService } from '../services/utilService'

export const MediaPlayer = ({ trackState, dockMode, onTogglePlay, onSwitchTrack }) => {

    const VOLUME_STORAGE_KEY = 'volume'
    const { audioRef } = useContext(PlayerContext)
    const { track, isPlaying } = trackState
    const { PUBLIC_URL, REACT_APP_CLIENT_ID } = process.env
    const seekbarRef = useRef(null)
    const seekbarInterval = useRef(null)
    const volumeFromStorage = utilService.loadFromStorage(VOLUME_STORAGE_KEY)
    const trackExists = track && Object.keys(track).length
    const SVG_BASE_URL = `${PUBLIC_URL}/assets/imgs`

    useEffect(() => {
        (async () => {
            clearTimer()
            trackExists && stopAudio()
            audioRef.current = new Audio(`${track.stream_url}?consumer_key=${REACT_APP_CLIENT_ID}`)
            trackExists && await audioRef.current.play()
            audioRef.current.volume = volumeFromStorage || 1
            audioRef.current.onended = () => onTrackEnd()
            seekbarInterval.current = setInterval(() => {
                seekbarRef.current.value = audioRef.current.currentTime * 1000
            }, 100)
        })()
        return () => {
            clearTimer()
        }
    }, [track.stream_url])

    const togglePlay = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play()
        trackExists && onTogglePlay(!trackState.isPlaying)
    }

    const stopAudio = () => {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
    }

    const onTrackEnd = () => {
        togglePlay()
        onSwitchTrack(true)
    }

    const clearTimer = () => {
        clearInterval(seekbarInterval.current)
        seekbarInterval.current = null
    }

    return <article className={`media-player ${dockMode ? 'dock-mode' : ''}`}>
        <div className="seekbar-container">
            <input type="range" ref={seekbarRef} min={0} max={track.duration} />
        </div>
        <main className="main-layout flex j-between a-center">
            <div className="flex grow a-center">
                <img className="media-img" alt="Media Artwork"
                    src={track.artwork_url || `${SVG_BASE_URL}/track-img-fallback.png`} />
                {trackExists ? <div className="flex col">
                    <label>{track.title}</label>
                    <small><span className="muted">by&nbsp;</span>{track.user.username}</small>
                </div> : null}
            </div>
            <div className="btns-container flex a-center">
                <button onClick={() => onSwitchTrack(false)}>
                    <img src={`${SVG_BASE_URL}/btn-prev.png`} alt="Previous" />
                </button>
                <button className={isPlaying ? 'btn-pause' : 'btn-play'} onClick={togglePlay}>
                    <img src={`${SVG_BASE_URL}/${isPlaying ? 'btn-pause' : 'btn-play'}.png`} alt={isPlaying ? 'Pause' : 'Play'} />
                </button>
                <button onClick={() => onSwitchTrack(true)}>
                    <img src={`${SVG_BASE_URL}/btn-next.png`} alt="Next" />
                </button>
            </div>
        </main>
    </article>
}