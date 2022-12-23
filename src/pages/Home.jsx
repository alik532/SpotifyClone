import React from "react";
import classes from '../styles/Home.module.css'
import AlbumList from "../components/AlbumList";
import { useDispatch, useSelector } from "react-redux";
import { selectAllAlbums, selectAlbumStatus, fetchAlbums } from "../reducers/albumReducer";
import { useEffect } from "react";

const Home = () => {
    
const dispatch = useDispatch()
    
  const albumStatus = useSelector(selectAlbumStatus)
  console.log(albumStatus)

  useEffect(() => {
    console.log('effect')
    if (albumStatus === 'idle')
      dispatch(fetchAlbums())
  }, [dispatch, albumStatus])
  
  const albums = useSelector(selectAllAlbums)

    return (
        <div className={classes.home}>
            <AlbumList list={albums} title="Awesome Albums"/>
            <AlbumList list={albums} title="Awesome Albums"/>
            <AlbumList list={albums} title="Awesome Albums"/>
        </div>
    )
}

export default Home