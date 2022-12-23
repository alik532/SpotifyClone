import React from 'react'
import MusicItem from './MusicItem'
import classes from '../styles/TrackList.module.css'

const TrackList = ({ tracks, img }) => {

    console.log(tracks)

    return (
        <div className={classes.trackList}>
            <div className={classes.controls}>

            </div>
            <div className={classes.header}>

            </div>
            <div className={classes.list}>
                {tracks.map((track, indx) => 
                    <MusicItem track={track} img={img} indx={indx} selectedTrack={false} onClick={() => console.log("clicked")}/>    
                )}
            </div>
        </div>
    )
}

export default TrackList