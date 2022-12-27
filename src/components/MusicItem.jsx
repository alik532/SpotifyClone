import React from 'react'
import classes from '../styles/MusicItem.module.css'
import Like from './UI/Like'
import getValidDuration from '../helpers/ValidDurationTime'
import PlayIcon from './UI/PlayIcon'
import Equalizer from './UI/Equalizer'
import { useDispatch } from 'react-redux'
import { fetchTracks } from '../reducers/tracksReducer'
import { getSelectedTrack } from '../reducers/tracksReducer'
import { useSelector } from 'react-redux'

const MusicItem = ({track, img, indx, album}) => {

    const validDuration = getValidDuration(track.duration_ms)
    const selectedTrack = useSelector(getSelectedTrack)
    let isSelectedTrack = false

    if (selectedTrack)
        isSelectedTrack = selectedTrack.id === track.id

    const dispatch = useDispatch()

    const selectTrack = () => {
        dispatch(fetchTracks(track.id))
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
                
                <img src={img} alt="" className={classes.preview}/>
                <div className={classes.main}>
                    <h2 className={classes.title}>{track.name}</h2>
                    <h4 className={classes.artist}>{track.artists.map(artist => artist.name + " ")}</h4>
                </div>
                <div className={classes.like}>
                    <Like/>
                </div>
            </div>
            <div className={classes.album}>
                {album}
            </div>
            <div className={classes.duration}>{validDuration}</div>
        </div>
    )
}

export default MusicItem