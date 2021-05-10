import { useEffect, useRef, useState } from "react"
import { AppFilter } from "../cmps/AppFilter"
import { MediaPlayer } from "../cmps/MediaPlayer"
import { TrackList } from "../cmps/TrackList"
import { TrackDetails } from "../cmps/TrackDetails"
import { mediaService } from '../services/mediaService'

export const Home = () => {

    const trackDetailsRef = useRef(null)
    const [trackState, setTrackState] = useState({
        isPlaying: false,
        track: {}
    })
    const [searchState, setSearchState] = useState({
        query: '',
        nextPageUrl: '',
        tracks: []
    })
    const { track } = trackState

    useEffect(() => {
        (async () => {
            const query = await mediaService.query('mob')
            setSearchState({
                ...searchState,
                nextPageUrl: query.next_href,
                tracks: query.collection
            })
        })()
    }, [])

    const onSetFilter = async filterTxt => {
        const query = await mediaService.query(filterTxt)
        setSearchState({
            query: filterTxt,
            nextPageUrl: query.next_href,
            tracks: filterTxt ? query.collection : searchState.tracks
        })
    }

    const onSelectTrack = selectedTrack => {
        setTrackState({
            ...trackState,
            track: selectedTrack
        })
        trackDetailsRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const onTogglePlay = status => {
        setTrackState({
            ...trackState,
            isPlaying: status
        })
    }

    const onNextPage = async () => {
        const query = await mediaService.nextPage(searchState.nextPageUrl)
        setSearchState({
            ...searchState,
            nextPageUrl: query.next_href,
            tracks: query.collection
        })
    }

    const onSwitchTrack = direction => {
        const { tracks } = searchState
        const trackIdx = tracks.findIndex(_track => _track.id === track.id)
        setTrackState({
            ...trackState,
            track: direction === 'next' ?
                trackIdx === tracks.length - 1 ? tracks[trackIdx] : tracks[trackIdx + 1]
                : trackIdx - 1 < 0 ? tracks[0] : tracks[trackIdx - 1]
        })
    }

    return <section className="home">
        <nav className="result-bar">
            <div className="main-layout flex col">
                <small>{searchState.query ? 'Search Results /' : 'Spotlight'}</small>
                <label>{searchState.query ? searchState.query : 'Featured Tracks'}</label>
            </div>
        </nav>
        <div className="main-layout pos-relative">
            <div ref={trackDetailsRef}>
                <AppFilter onSetFilter={onSetFilter} />
            </div>
            {track && Object.keys(track).length ? <TrackDetails trackState={trackState} onTogglePlay={onTogglePlay} /> : null}
            <TrackList tracks={searchState.tracks} onSelectTrack={onSelectTrack} onNextPage={onNextPage} />
        </div>
        <MediaPlayer trackState={trackState} onTogglePlay={onTogglePlay} onSwitchTrack={onSwitchTrack} />
    </section>
}