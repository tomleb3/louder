import { useEffect, useState } from "react"
import { AppFilter } from "../cmps/AppFilter"
import { MediaPlayer } from "../cmps/MediaPlayer"
import { TrackList } from "../cmps/TrackList"
import { TrackDetails } from "../cmps/TrackDetails"
import { mediaService } from '../services/mediaService'

export const Home = () => {

    const [track, setTrack] = useState({})
    const [searchSettings, setSearchSetting] = useState({
        lastQuery: '',
        currQuery: '',
        nextPageUrl: '',
        tracks: []
    })

    useEffect(() => {
        (async () => {
            const query = await mediaService.query('mob')
            setSearchSetting({
                ...searchSettings,
                nextPageUrl: query.next_href,
                tracks: query.collection
            })
        })()
    }, [])

    const onSetFilter = async filterTxt => {
        const query = await mediaService.query(filterTxt)
        setSearchSetting({
            lastQuery: filterTxt ? filterTxt : searchSettings.lastQuery,
            currQuery: filterTxt,
            nextPageUrl: query.next_href,
            tracks: filterTxt ? query.collection : []
        })
    }

    const onSelectTrack = selectedTrack => {
        setTrack(selectedTrack)
        onSetFilter('')
    }

    const onNextPage = async () => {
        const query = await mediaService.nextPage(searchSettings.nextPageUrl)
        setSearchSetting({
            ...searchSettings,
            nextPageUrl: query.next_href,
            tracks: query.collection
        })
    }

    return <section className="home">
        <nav className="result-bar">
            <div className="main-layout flex col">
                <small>{searchSettings.currQuery ? 'Search Results /' : 'Spotlight'}</small>
                <label>{searchSettings.currQuery ? searchSettings.currQuery : 'Featured Tracks'}</label>
            </div>
        </nav>
        <div className="main-layout pos-relative">
            <AppFilter onSetFilter={onSetFilter} />
            {Object.keys(track).length ? <TrackDetails track={track} />
                : <TrackList tracks={searchSettings.tracks} onSelectTrack={onSelectTrack} onNextPage={onNextPage} />}
        </div>
        <MediaPlayer track={track} />
    </section>
}