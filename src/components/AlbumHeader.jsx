import React from 'react'
import classes from '../styles/AlbumHeader.module.css'
import getAlbumDuration from '../helpers/ConvertMillisecs'

const AlbumHeader = ({ album, color }) => {

  const artists = album.artists.map(artist => artist.name).join(" ")

  return (
    <div className={classes.albumHeader} style={{background: `linear-gradient(180deg, ${color} 40%, ${color}90 100%)`}}>
        <img className={classes.img} src={album.images[1].url} alt="" />
        <div className={classes.container}>
            <p>ALBUM</p>
            <h1 className={classes.title}>{album.name}</h1>
            <div className={classes.info}>
                <div className={classes.artist}>{artists}</div>
                <div className={classes.date}>{album.release_date.slice(0, 4)}</div>
                <div className={classes.tracks}>{album.tracks.items.length-1} Tracks</div>
                <div className={classes.duration}>{getAlbumDuration(album)}</div>
            </div>
        </div>
    </div>
  )
}

export default AlbumHeader