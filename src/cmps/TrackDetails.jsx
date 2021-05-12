import { LongTxt } from "./LongTxt"
import { utilService } from '../services/utilService'

export const TrackDetails = ({ trackState, onTogglePlay }) => {

    const { track, isPlaying } = trackState
    const svgBaseUrl = `${process.env.PUBLIC_URL}/assets/imgs`

    return <section className="track-details flex col">
        <div className="track-panel flex">
            <img src={track.artwork_url || `${svgBaseUrl}/track-img-fallback.png`}
                className={`${isPlaying ? '' : 'active'}`} onClick={() => onTogglePlay(true)} alt="" />
            <div className="flex col">
                <header className="flex col">
                    <label>{track.title}</label>
                </header>
                <main className="grow">
                    {track.description ? <LongTxt text={track.description} />
                        : <span className="muted">No description given...</span>}
                </main>
                <footer className="flex a-center">
                    <div className="flex a-center">
                        <img className="clock-img" src={`${svgBaseUrl}/clock.png`} alt="" />
                        <span>{utilService.millisToMinsSecs(track.duration)}</span>
                    </div>
                    <div className="flex a-center">
                        <img className="fav-img" src={`${svgBaseUrl}/favorite.png`} alt="" />
                        <span>{track.favoritings_count}</span>
                    </div>
                </footer>
            </div >
        </div >
        <div className="artist-panel flex col">
            <h4>Artist</h4>
            <div className="flex">
                <img src={track.user.avatar_url} alt="" />
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