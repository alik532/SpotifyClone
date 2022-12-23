import React from 'react'
import classes from '../styles/MusicItem.module.css'
import Like from './UI/Like'
import getValidDuration from '../helpers/ValidDurationTime'
import PlayIcon from './UI/PlayIcon'
import Equalizer from './UI/Equalizer'

const MusicItem = ({track, img, indx, selectedTrack, onClick}) => {

    const validDuration = getValidDuration(track.duration_ms)
    const isSelectedTrack = selectedTrack === track

    return (
        <div 
            className={classes.musicItem} 
            onClick={onClick}
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
                Neffex
            </div>
            <div className={classes.duration}>{validDuration}</div>
        </div>
    )
}

export default MusicItem