import { useState } from "react"
import { RecentSearches } from "./RecentSearches"
import { utilService } from '../services/utilService'

export const AppFilter = ({ onSetFilter }) => {

    const [filterTxt, setFilterTxt] = useState('')
    const [showRecents, toggleShowRecents] = useState(false)
    const STORAGE_KEY = 'SEARCHES'
    let recentSearches = utilService.loadFromStorage(STORAGE_KEY) || []

    const handleChange = (ev, txt) =>
        setFilterTxt(txt || ev.target.value)

    const handleStorage = () => {
        if (recentSearches.length >= 5) recentSearches.pop()
        recentSearches.unshift(filterTxt)
        utilService.saveToStorage(STORAGE_KEY, recentSearches)
    }

    const onClearSearches = () => {
        setFilterTxt('')
        utilService.removeFromStorage(STORAGE_KEY)
    }

    const onFilter = ev => {
        ev.preventDefault()
        if (filterTxt) handleStorage()
        onSetFilter(filterTxt)
        toggleShowRecents(false)
    }

    return <form className="app-filter flex col a-center" onSubmit={onFilter}>
        <input type="text" name="filter-input" value={filterTxt} onChange={handleChange} autoComplete="off"
            onFocus={() => toggleShowRecents(true)} onBlur={() => setTimeout(() => toggleShowRecents(false), 150)} />
        {recentSearches.length && showRecents ? <RecentSearches recentSearches={recentSearches}
            handleChange={handleChange} onClearSearches={onClearSearches} /> : null}
        <button type="submit" className={filterTxt ? '' : 'inactive'}>Find</button>
    </form>
}