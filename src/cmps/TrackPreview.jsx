import { utilService } from '../services/utilService'

export const TrackPreview = ({ track, onSelectTrack, gridView }) => {

    const SVG_BASE_URL = `${process.env.PUBLIC_URL}/assets/imgs`
    const HIGH_RES_ARTWORK_URL = track?.artwork_url?.replace('-large.jpg', '-t500x500.jpg')

    return <article className={`track-preview pointer ${gridView ? 'grid-view' : 'list-view'}`}
        onClick={() => onSelectTrack(track)}>
        <img src={HIGH_RES_ARTWORK_URL || `${SVG_BASE_URL}/track-img-fallback.png`} alt="" />
        <div className="flex col">
            <small>{track.user.username}</small>
            <label>{track.title}</label>
            <div className="flex a-self-end">
                <div className="flex a-center">
                    <img className="clock-img" src={`${SVG_BASE_URL}/clock.png`} alt="" />
                    <span>{utilService.millisToMinsSecs(track.duration)}</span>
                </div>
                <div className="flex a-center">
                    <img className="fav-img" src={`${SVG_BASE_URL}/favorite.png`} alt="" />
                    <span>{track.favoritings_count}</span>
                </div>
            </div>
        </div>
    </article>
}