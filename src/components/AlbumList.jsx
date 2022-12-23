import React from 'react'
import classes from '../styles/AlbumList.module.css'
import AlbumCard from './AlbumCard'
import { Link } from 'react-router-dom'

const AlbumList = ({list, title}) => {

    const handleClick = () => {
        
    }

    return (
        <div className={classes.albumList}>
            <h2 className={classes.title}>{title}</h2>
            <div className={classes.list}>
                {list.map(album => 
                    <Link to={`/playlist/${album.id}`}><AlbumCard album={album} onClick={handleClick}/></Link>
                )}
            </div>
        </div>
    )
}

export default AlbumList