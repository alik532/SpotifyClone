import React from 'react'
import classes from '../styles/MyMedia.module.css'
import { useSelector } from 'react-redux'
import MusicItem from '../components/MusicItem'
import { getAllTracks } from '../reducers/albumReducer'

const MyMedia = () => {

    const likedTracks = useSelector(getAllTracks).filter(track => track.liked)

    return (
        <div className={classes.myMedia}>
            {likedTracks ? likedTracks.map((track, indx) =>
                <MusicItem track={track} indx={indx} key={indx} img={track.img}/>
            ) :
            null}
        </div>
    )
}

export default MyMedia