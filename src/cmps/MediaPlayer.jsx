import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

export const MediaPlayer = ({ track, dockMode }) => {

    const { PUBLIC_URL, REACT_APP_CLIENT_ID } = process.env
    const svgBaseUrl = `${PUBLIC_URL}/assets/imgs`
    let audioUrl = useRef()
    const trackExists = track && Object.keys(track).length
    const [isPlaying, togglePlaying] = useState(false)
    console.log(track)

    useEffect(() => {
        (async () => {
            trackExists && onStopAudio()
            audioUrl.current = new Audio(`${track.stream_url}?consumer_key=${REACT_APP_CLIENT_ID}`)
            await audioUrl.current.play()
            togglePlaying(true)
        })()
    }, [track.stream_url])

    const onTogglePlay = () => {
        isPlaying ? audioUrl.current.pause() : audioUrl.current.play()
        trackExists && togglePlaying(!isPlaying)
    }

    const onStopAudio = () => {
        audioUrl.current.pause()
        audioUrl.current.currentTime = 0
        togglePlaying(false)
    }

    const onNextTrack = () => {

    }
    const onPrevTrack = () => {

    }

    return <article className={`media-player ${dockMode ? 'dock-mode' : ''}`}>
        <div className="main-layout flex j-between a-center">
            <div className="flex grow a-center">
                {<Link to='/player' />}
                <img className="media-img" alt=""
                    src={track.artwork_url || `${svgBaseUrl}/track-img-fallback.svg`} />
                {trackExists ? <div className="flex col">
                    <label>{track.title}</label>
                    <small><span className="muted">by&nbsp;</span>{track.user.username}</small>
                </div> : null}
            </div>
            <div className="btn-container flex">
                <button onClick={onPrevTrack}>
                    <img src={`${svgBaseUrl}/btn-prev.png`} alt="" />
                </button>
                <button className={isPlaying ? 'btn-pause' : 'btn-play'} onClick={onTogglePlay}>
                    <img src={`${svgBaseUrl}/${isPlaying ? 'btn-pause' : 'btn-play'}.png`} alt="" />
                </button>
                <button onClick={onNextTrack}>
                    <img src={`${svgBaseUrl}/btn-next.png`} alt="" />
                </button>
            </div>
        </div>
    </article>
}