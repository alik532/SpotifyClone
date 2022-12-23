import React from 'react'
import classes from '../styles/AlbumHeader.module.css'

const AlbumHeader = ({ album }) => {

  const artists = album.artists.map(artist => artist.name).join(" ")

  return (
    <div className={classes.albumHeader}>
        <img className={classes.img} src={album.images[1].url} alt="" />
        <div className={classes.container}>
            <p>ALBUM</p>
            <h1 className={classes.title}>{album.name}</h1>
            <div className={classes.info}>
                <div className={classes.artist}>{artists}</div>
                <div className={classes.date}>{album.release_date.slice(0, 4)}</div>
                <div className={classes.tracks}>{album.tracks.items.length} Tracks</div>
                <div className={classes.duration}>2 hours 1 minute</div>
            </div>
        </div>
    </div>
  )
}

export default AlbumHeader