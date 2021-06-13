import { useState } from 'react'
import { TrackPreview } from './TrackPreview'
import { utilService } from '../services/utilService'

export const TrackList = ({ tracks, onSelectTrack, onNextPage }) => {

    const STORAGE_KEY = 'is_grid_mode'
    const SVG_BASE_URL = `${process.env.PUBLIC_URL}/assets/imgs`
    const viewModeFromStorage = utilService.loadFromStorage(STORAGE_KEY)
    const [gridView, toggleGridView] = useState(viewModeFromStorage || false)

    const onToggleGridView = isListView => {
        toggleGridView(isListView)
        utilService.saveToStorage(STORAGE_KEY, isListView)
    }

    if (!tracks.length) return <div></div>
    return <section className="track-list-container">
        <div className={`track-list ${gridView ? 'grid-view' : 'list-view'}`}>
            {tracks.map(track => {
                return <TrackPreview key={track.id} gridView={gridView}
                    track={track} onSelectTrack={onSelectTrack} />
            })}
        </div>
        <div className="btns-container flex grow">
            <button className="btn-grid" onClick={() => onToggleGridView(true)}>
                <img src={`${SVG_BASE_URL}/grid.svg`} alt="grid" />
            </button>
            <span></span>
            <button className="btn-list" onClick={() => onToggleGridView(false)}>
                <img src={`${SVG_BASE_URL}/list.svg`} alt="list" />
            </button>
            <button className="btn-next" onClick={onNextPage}>Next</button>
        </div>
    </section>
}