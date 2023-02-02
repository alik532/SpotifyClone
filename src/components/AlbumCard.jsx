import React from 'react'
import classes from '../styles/AlbumCard.module.css'
import GreenCircle from './UI/GreenCircle'
import PlayIcon from './UI/PlayIcon'
import { useSelector } from 'react-redux'
import { getSelectedTrack, fetchTracks } from '../reducers/getTrackReducer'
import PauseIcon from './UI/PauseIcon'
import { useDispatch } from 'react-redux'

const AlbumCard = ({ album }) => {

  const dispatch = useDispatch()

  const selectedTrack = useSelector(getSelectedTrack)
  let isSelected = false

  if (selectedTrack) {
    for (let i of album.tracks.items) {
      if (selectedTrack.id === i.id) {
        isSelected = true
        break
      }
    }
  }

  const play = () => {
    dispatch(fetchTracks(album.tracks.items[0].id))
  }

  return (
    <div className={classes.albumCard}>
        <img src={album.images[1].url} alt="" className={classes.preview}/>
        <h2 className={classes.title}>{album.name}</h2>
        <div className={classes.description}>{album.label}</div>
        <div className={classes.btn} style={isSelected ? {opacity: "1", bottom: "120px"} : {}}>
          <GreenCircle>
            {isSelected ?  <PauseIcon style={{fill: "black"}}/> : <PlayIcon style={{fill: "black"}} onClick={play} />}
          </GreenCircle>
        </div>
    </div>
  )
}

export default AlbumCard
