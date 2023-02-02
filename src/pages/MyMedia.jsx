import React from 'react'
import classes from '../styles/MyMedia.module.css'
import { useSelector } from 'react-redux'
import { selectLikedTracks } from '../reducers/likedReducer'
import MusicItem from '../components/MusicItem'

const MyMedia = () => {

    const likedTracks = useSelector(selectLikedTracks)
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