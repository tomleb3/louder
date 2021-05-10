import { utilService } from '../services/utilService'

export const TrackPreview = ({ track, onSelectTrack, gridView }) => {

    const svgBaseUrl = `${process.env.PUBLIC_URL}/assets/imgs`

    return <article className={`track-preview pointer ${gridView ? 'grid-view' : 'list-view'}`}
        onClick={() => onSelectTrack(track)}>
        <img src={track.artwork_url || `${svgBaseUrl}/track-img-fallback.svg`} alt="" />
        <div className="flex col">
            <small>{track.user.username}</small>
            <label>{track.title}</label>
            <div className="flex a-self-end">
                <div className="flex a-center">
                    <img className="clock-img" src={`${svgBaseUrl}/clock.png`} alt="" />
                    <span>{utilService.millisToMinsSecs(track.duration)}</span>
                </div>
                <div className="flex a-center">
                    <img className="fav-img" src={`${svgBaseUrl}/favorite.png`} alt="" />
                    <span>{track.favoritings_count}</span>
                </div>
            </div>
        </div>
    </article>
}