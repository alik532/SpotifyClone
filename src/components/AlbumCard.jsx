import React from 'react'
import classes from '../styles/AlbumCard.module.css'
import GreenCircle from './UI/GreenCircle'
import PlayIcon from './UI/PlayIcon'

const AlbumCard = ({ album }) => {
  return (
    <div className={classes.albumCard}>
        <img src={album.images[1].url} alt="" className={classes.preview}/>
        <h2 className={classes.title}>{album.name}</h2>
        <div className={classes.description}>{album.label}</div>
        <div className={classes.btn}>
          <GreenCircle>
            <PlayIcon style={{fill: "black"}}/>
          </GreenCircle>
        </div>
    </div>
  )
}

export default AlbumCard
