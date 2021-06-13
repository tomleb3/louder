import { useState } from "react"
import { RecentSearches } from "./RecentSearches"
import { utilService } from '../services/utilService'

export const AppFilter = ({ onSetFilter }) => {

    const [filterTxt, setFilterTxt] = useState('')
    const [showRecents, toggleShowRecents] = useState(false)
    const SEARCHES_STORAGE_KEY = 'searches'
    let recentSearches = utilService.loadFromStorage(SEARCHES_STORAGE_KEY) || []

    const handleChange = (ev, txt) =>
        setFilterTxt(txt || ev.target.value)

    const handleStorage = () => {
        if (recentSearches.length >= 5) recentSearches.pop()
        recentSearches.unshift(filterTxt)
        utilService.saveToStorage(SEARCHES_STORAGE_KEY, recentSearches)
    }

    const onClearSearches = () => {
        setFilterTxt('')
        utilService.removeFromStorage(SEARCHES_STORAGE_KEY)
    }

    const onFilter = ev => {
        ev.preventDefault()
        if (filterTxt) handleStorage()
        onSetFilter(filterTxt)
        toggleShowRecents(false)
    }

    return <form className="app-filter flex col a-center" onSubmit={onFilter} onKeyPress={ev => ev.key === 'Enter' && onFilter(ev)}>
        <input type="text" name="filter-input" value={filterTxt} onChange={handleChange} autoComplete="off"
            onFocus={() => toggleShowRecents(true)} onBlur={() => setTimeout(() => toggleShowRecents(false), 150)} />
        {recentSearches.length && showRecents ? <RecentSearches recentSearches={recentSearches}
            handleChange={handleChange} onClearSearches={onClearSearches} /> : null}
        <button type="submit" className={filterTxt ? '' : 'inactive'}>Find</button>
    </form>
}