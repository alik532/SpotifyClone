import React from "react";
import classes from '../styles/Home.module.css'
import AlbumList from "../components/AlbumList";
import { useDispatch, useSelector } from "react-redux";
import { selectAllAlbums, selectAlbumStatus, fetchAlbums } from "../reducers/albumReducer";
import { useEffect } from "react";
import LoadingAnimation from "../components/UI/Loading";

const Home = () => {
    
const dispatch = useDispatch()
    
  const albumStatus = useSelector(selectAlbumStatus)

  useEffect(() => {
    if (albumStatus === 'idle')
      dispatch(fetchAlbums())
  }, [dispatch, albumStatus])
  const status = useSelector(selectAlbumStatus)
  
  
  const albums = useSelector(selectAllAlbums)
  
  if (status === 'loading') {
    return (
        <div className={classes.loading}>
            <LoadingAnimation></LoadingAnimation>
        </div>
    )
}
    return (
        <div className={classes.home}>
            <AlbumList list={albums.slice(0, 7)} title="Awesome Albums"/>
            <AlbumList list={albums.slice(7, 15)} title="Awesome Albums"/>
            <AlbumList list={albums.slice(15, 22)} title="Awesome Albums"/>
        </div>
    )
}

export default Home