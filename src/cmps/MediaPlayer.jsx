import { useEffect, useRef } from "react"

export const MediaPlayer = ({ trackState, dockMode, onTogglePlay, onSwitchTrack }) => {

    const { track, isPlaying } = trackState
    const { PUBLIC_URL, REACT_APP_CLIENT_ID } = process.env
    const svgBaseUrl = `${PUBLIC_URL}/assets/imgs`
    let audioUrl = useRef()
    const trackExists = track && Object.keys(track).length

    useEffect(() => {
        (async () => trackState.isPlaying && await audioUrl.current.play())()
    })

    useEffect(() => {
        onTogglePlay(false)
        trackExists && onStopAudio()
        audioUrl.current = new Audio(`${track.stream_url}?consumer_key=${REACT_APP_CLIENT_ID}`)
    }, [track.stream_url])


    const togglePlay = () => {
        isPlaying ? audioUrl.current.pause() : audioUrl.current.play()
        trackExists && onTogglePlay(!trackState.isPlaying)
    }

    const onStopAudio = () => {
        audioUrl.current.pause()
        audioUrl.current.currentTime = 0
    }

    return <article className={`media-player ${dockMode ? 'dock-mode' : ''}`}>
        <div className="main-layout flex j-between a-center">
            <div className="flex grow a-center">
                <img className="media-img" alt=""
                    src={track.artwork_url || `${svgBaseUrl}/track-img-fallback.png`} />
                {trackExists ? <div className="flex col">
                    <label>{track.title}</label>
                    <small><span className="muted">by&nbsp;</span>{track.user.username}</small>
                </div> : null}
            </div>
            <div className="btn-container flex">
                <button onClick={() => onSwitchTrack('prev')}>
                    <img src={`${svgBaseUrl}/btn-prev.png`} alt="" />
                </button>
                <button className={isPlaying ? 'btn-pause' : 'btn-play'} onClick={togglePlay}>
                    <img src={`${svgBaseUrl}/${isPlaying ? 'btn-pause' : 'btn-play'}.png`} alt="" />
                </button>
                <button onClick={() => onSwitchTrack('next')}>
                    <img src={`${svgBaseUrl}/btn-next.png`} alt="" />
                </button>
            </div>
        </div>
    </article>
}