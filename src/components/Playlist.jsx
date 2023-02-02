import React from 'react'
import classes from '../styles/Playlist.module.css'
import AlbumHeader from './AlbumHeader'
import TrackList from './TrackList'
import { selectAllAlbums, selectAlbumStatus, fetchAlbums } from '../reducers/albumReducer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const Playlist = () => {
  const dispatch = useDispatch()
  const status = useSelector(selectAlbumStatus)
  const albums = useSelector(selectAllAlbums)

  let { id } = useParams()

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAlbums())
    }
  }, [dispatch, status])
  let album = albums.filter(a => a.id === id)[0]
  console.log(album)
  return (
    <div className={classes.playlist}>
        <div className={classes.header}>
            <AlbumHeader album={album} color={album.color}/>
        </div>
        <div className={classes.list}>
            <TrackList album={album} color={album.color}/>
        </div>
    </div>
  )
}

export default Playlist