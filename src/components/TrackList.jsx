import React from 'react'
import MusicItem from './MusicItem'
import classes from '../styles/TrackList.module.css'

const TrackList = ({ tracks, img, album, color }) => {
    return (
        <div className={classes.trackList}>
            <div className={classes.background} style={{background: `linear-gradient(180deg, ${color}90 10%, ${color}01 80%)`}}></div>
            <div className={classes.controls}>

            </div>
            <div className={classes.header}>

            </div>
            <div className={classes.list}>
                {tracks.map((track, indx) => 
                    <MusicItem key={indx} track={track} img={img} indx={indx} album={album}/>    
                )}
            </div>       
        </div>
    )
}

export default TrackList