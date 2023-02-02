import React from 'react'
import classes from '../styles/MusicItem.module.css'
import Like from './UI/Like'
import getValidDuration from '../helpers/ValidDurationTime'
import PlayIcon from './UI/PlayIcon'
import Equalizer from './UI/Equalizer'
import { useDispatch } from 'react-redux'
import { fetchTracks } from '../reducers/getTrackReducer'
import { getSelectedTrack } from '../reducers/getTrackReducer'
import { useSelector } from 'react-redux'
import { likeTrack } from '../reducers/albumReducer'

const MusicItem = ({track, indx}) => {

    const validDuration = getValidDuration(track.duration_ms)
    const selectedTrack = useSelector(getSelectedTrack)
    let isSelectedTrack = false

    if (selectedTrack)
        isSelectedTrack = selectedTrack.id === track.id

    const dispatch = useDispatch()

    const selectTrack = () => {
        dispatch(fetchTracks(track.id))
    }

    const like = () => {
        dispatch(likeTrack(track.id))
    }

    return (
        <div 
            onClick={selectTrack}
            className={classes.musicItem} 
            style={isSelectedTrack ? {color: "#1db954"} : {color: "white"}}
        >
            <div className={classes.container}>
                {isSelectedTrack ? <Equalizer/> : (<div>
                <div className={classes.indx}>{indx+1}</div>
                <div className={classes.play}><PlayIcon/></div>
                </div>)}
                
                <img src={track.img} alt="" className={classes.preview}/>
                <div className={classes.main}>
                    <h2 className={classes.title}>{track.name}</h2>
                    <h4 className={classes.artist}>{track.artists.map(artist => artist.name + " ")}</h4>
                </div>
                <div className={classes.like} onClick={like}>
                    <Like stat={track.liked}/>
                </div>
            </div>
            <div className={classes.album}>
                {track.album}
            </div>
            <div className={classes.duration}>{validDuration}</div>
        </div>
    )
}

export default MusicItem