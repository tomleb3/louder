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
    const trackExists = track && Object.keys(track).length

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
            isPlaying: true,
            track: selectedTrack
        })
        scrollToTrackDetails()
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

    const onSwitchTrack = isDirectionNext => {
        const { tracks } = searchState
        const trackIdx = tracks.findIndex(_track => _track.id === track.id)
        setTrackState({
            ...trackState,
            track: isDirectionNext ?
                trackIdx === tracks.length - 1 ? tracks[trackIdx] : tracks[trackIdx + 1]
                : trackIdx - 1 < 0 ? tracks[0] : tracks[trackIdx - 1]
        })
    }

    const scrollToTrackDetails = () =>
        trackDetailsRef.current.scrollIntoView()

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
            {trackExists ? <TrackDetails trackState={trackState} onTogglePlay={onTogglePlay} onSwitchTrack={onSwitchTrack} /> : null}
            <TrackList tracks={searchState.tracks} onSelectTrack={onSelectTrack} onNextPage={onNextPage} />
        </div>
        <div className="media-player-container" onClick={trackExists && scrollToTrackDetails}>
            <MediaPlayer trackState={trackState} onTogglePlay={onTogglePlay} onSwitchTrack={onSwitchTrack} />
        </div>
    </section>
}