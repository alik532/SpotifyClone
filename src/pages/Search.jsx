import React from "react";
import classes from '../styles/Search.module.css'
import LoadingAnimation from "../components/UI/Loading";
import { useState } from "react";
import SearchInput from "../components/UI/SearchInput";
import { selectAlbumStatus } from "../reducers/albumReducer";
import { useSelector } from "react-redux";
import MusicItem from '../components/MusicItem'
import { getAllTracks } from "../reducers/albumReducer";
import { useEffect } from "react";

const Search = () => {

    const status = useSelector(selectAlbumStatus)
    
    const [query, setQuery] = useState('')
    const [foundTracks, setFoundTracks] = useState("")
    let tracks = useSelector(getAllTracks)

    useEffect(() => {
        setFoundTracks(tracks.filter(track => track.name.toLowerCase().startsWith(query.toLowerCase())))
    }, [tracks, query])

    const handleChange = (value) => {
        setQuery(value)
        setFoundTracks(tracks.filter(track => track.name.toLowerCase().startsWith(query.toLowerCase())))
    }
    
    if (status === 'loading') {
        return (
            <div className={classes.loading}>
                <LoadingAnimation></LoadingAnimation>
            </div>
        )
    }
    return (
        <div className={classes.search}>
            <SearchInput value={query} onChange={(value) => handleChange(value)}/>
            {foundTracks ? foundTracks.map((track, indx) => {
                return <MusicItem track={track} indx={indx} key={indx}/>
            }
            ) : <div>Nothing found</div>}
        </div>
    )
}

export default Search;