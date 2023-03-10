import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Playlist from './components/Playlist';
import MusicPlayer from './components/MusicPlayer';
import { getSelectedTrack } from './reducers/getTrackReducer';
import { useSelector } from 'react-redux';
import Search from './pages/Search';
import MyMedia from './pages/MyMedia';

function App() { 

  const selectedTrack = useSelector(getSelectedTrack)

  return (
    <BrowserRouter> 
      <SideBar/>
      <div className="App">
        <Routes>
          <Route path='media' element={<MyMedia/>}/>
          <Route exact path='/playlist/:id' element={<Playlist/>}/>    
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
      </div>
      {selectedTrack ?  <MusicPlayer track={selectedTrack}/> : <MusicPlayer />}
    </BrowserRouter>
  );
}

export default App;