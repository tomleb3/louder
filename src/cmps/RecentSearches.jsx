import { utilService } from '../services/utilService'

export const RecentSearches = ({ recentSearches, handleChange, onClearSearches }) => {

    return <div className="recent-searches-container">
        <div className="recent-searches flex col">
            {recentSearches.map(searchItem => {
                return <button className="btn-search-item"
                    key={utilService.makeId()} onClick={() => handleChange(null, searchItem)}>
                    <span>{searchItem}</span>
                </button>
            })}
            <button className="btn-clear" onClick={onClearSearches}>CLEAR</button>
        </div>
    </div>
}