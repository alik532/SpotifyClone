import React from 'react'
import classes from '../styles/MusicPlayer.module.css'

const MusicPlayer = ({track, trackPaused}) => {


    if (track) 
        return (
            <div className={classes.musicPlayer}>
                <div className={classes.mainInfo}>
                    <img src={track.album.images[1].url} alt="" className={classes.preview}/>
                    <div>
                        <h3 className={classes.title}>{track.name}</h3>
                        <h4 className={classes.artist}>{track.artists.map(artist => artist.name + " ")}</h4>
                    </div>
                </div>
                <div className={classes.controls}>
                    <audio controls autoPlay src={track.preview_url} className={classes.audio} paused={trackPaused ? "true" : "false"}></audio>
                </div>
                <div className={classes.settings}>
                    <div>icon</div>
                    <div>icon</div>
                </div>
            </div>
        )
    else {
        trackPaused = true
        return (
            <div className={classes.musicPlayer}>
                <div className={classes.mainInfo}>
                    <img src="" alt="" className={classes.preview}/>
                    <div>
                        <h3 className={classes.title}> </h3>
                        <h4 className={classes.artist}> </h4>
                    </div>
                </div>
                <div className={classes.controls}>
                    <audio controls autoPlay className={classes.audio} paused={trackPaused ? "true" : "false"}></audio>
                </div>
                <div className={classes.settings}>
                    <div>icon</div>
                    <div>icon</div>
                </div>
            </div>
        )
    }
}

export default MusicPlayer