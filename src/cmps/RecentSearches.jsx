import { utilService } from '../services/utilService'

export const RecentSearches = ({ recentSearches, handleChange, onClearSearches }) => {

    return <div className="recent-searches">
        {recentSearches.map(searchItem => {
            return <button className="btn-search-item"
                key={utilService.makeId()} onClick={ev => handleChange(ev, searchItem, true)}>
                <span>{searchItem}</span>
            </button>
        })}
        <button className="btn-clear" onClick={onClearSearches}>CLEAR</button>
    </div>
}