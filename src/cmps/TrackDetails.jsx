import { LongTxt } from "./LongTxt"
import { useContext, useEffect, useRef, useState } from "react"
import { PlayerContext } from '../App'
import { utilService } from '../services/utilService'

export const TrackDetails = ({ trackState, onTogglePlay, onSwitchTrack }) => {

    const VOLUME_STORAGE_KEY = 'volume'
    const { track, isPlaying } = trackState
    const { audioRef } = useContext(PlayerContext)
    const seekbarRef = useRef(null)
    const volumeFromStorage = utilService.loadFromStorage(VOLUME_STORAGE_KEY)
    const [volume, setVolume] = useState(+volumeFromStorage || audioRef.current.volume)
    const currTimeLblRef = useRef(null)
    const seekbarInterval = useRef(null)
    const trackExists = track && Object.keys(track).length
    const SVG_BASE_URL = `${process.env.PUBLIC_URL}/assets/imgs`
    const HIGH_RES_ARTWORK_URL = track?.artwork_url?.replace('-large.jpg', '-t500x500.jpg')

    useEffect(() => {
        seekbarInterval.current = setInterval(() => {
            const currTimeSecs = audioRef.current.currentTime * 1000
            seekbarRef.current.value = currTimeSecs
            currTimeLblRef.current.innerText = utilService.millisToMinsSecs(currTimeSecs)
        }, 100)
        return () => {
            clearTimer()
        }
    }, [audioRef])

    const handleSeekbar = ev =>
        audioRef.current.currentTime = ev.target.value / 1000

    const handleVolumeBar = ev => {
        const newVol = ev.target.value
        audioRef.current.volume = +newVol
        setVolume(+newVol)
        utilService.saveToStorage(VOLUME_STORAGE_KEY, newVol)
    }

    const togglePlay = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play()
        trackExists && onTogglePlay(!trackState.isPlaying)
    }

    const clearTimer = () => {
        clearInterval(seekbarInterval.current)
        seekbarInterval.current = null
    }

    const volumeBarSvg = () => {
        if (!volume) {
            return <svg role="presentation" fill="currentColor" height="18" width="18" aria-label="Volume off" id="volume-icon" viewBox="0 0 16 16">
                <path d="M0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732zm8.623 2.121l-.707-.707-2.147
                 2.147-2.146-2.147-.707.707L12.062 8l-2.146 2.146.707.707 2.146-2.147 2.147 2.147.707-.707L13.477 8l2.146-2.147z"></path>
            </svg>
        }
        else if (volume <= 0.5) {
            return <svg role="presentation" fill="currentColor" height="18" width="18" aria-label="Volume medium" id="volume-icon" viewBox="0 0 16 16">
                <path d="M0 11.032v-6h2.802l5.198-3v12l-5.198-3H0zm7 1.27v-8.54l-3.929 2.27H1v4h2.071L7
                 12.302zm4.464-2.314q.401-.925.401-1.956 0-1.032-.4-1.957-.402-.924-1.124-1.623L11 3.69q.873.834
                  1.369 1.957.496 1.123.496 2.385 0 1.262-.496 2.385-.496 1.123-1.369 1.956l-.659-.762q.722-.698 1.123-1.623z"></path>
            </svg>
        }
        else return <svg role="presentation" fill="currentColor" height="18" width="18" aria-label="Volume high" viewBox="0 0 16 16">
            <path d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966
            8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404
            1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"></path>
        </svg>
    }

    return <section className="track-details flex col">
        <main className="flex col">
            <div className="track-panel flex">
                <img src={HIGH_RES_ARTWORK_URL || `${SVG_BASE_URL}/track-img-fallback.png`} alt="Media Artwork" />
                <div className="flex col">
                    <header className="flex col">
                        <label>{track.title}</label>
                    </header>
                    <main className="grow">
                        {track.description ? <LongTxt text={track.description} />
                            : <span className="muted">No description given...</span>}
                    </main>
                    <footer className="flex j-between a-center">
                        <div className="track-info-container flex a-center">
                            <div className="flex a-center">
                                <img className="clock-img" src={`${SVG_BASE_URL}/clock.png`} alt="" />
                                <span>{utilService.millisToMinsSecs(track.duration)}</span>
                            </div>
                            <div className="flex a-center">
                                <img className="fav-img" src={`${SVG_BASE_URL}/favorite.png`} alt="" />
                                <span>{track.favoritings_count}</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <div className="play-container flex j-between a-center">
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
                <div className="seekbar-container flex a-center">
                    <label ref={currTimeLblRef}>0:00</label>
                    <input type="range" ref={seekbarRef} min={0} max={track.duration} onInput={handleSeekbar} />
                    <label>{utilService.millisToMinsSecs(track.duration)}</label>
                </div>
                <div className="volume-bar-container flex a-center">
                    {volumeBarSvg()}
                    <input type="range" value={audioRef.current.volume} min={0} max={1} step={0.1} onInput={handleVolumeBar} />
                </div>
            </div>
        </main>

        <div className="artist-panel flex col">
            <h4>Artist</h4>
            <div className="flex">
                <img src={track.user.avatar_url} alt="User Artwork" />
                <div className="flex col">
                    <small className="grow">{track.user.username}</small>
                    <a href="https://soundcloud.com/octobersveryown" target="_blank" rel="noreferrer">
                        <button>Visit</button>
                    </a>
                </div>
            </div>
        </div>
    </section >
}