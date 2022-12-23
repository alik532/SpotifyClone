import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Playlist from './components/Playlist';

function App() { 

  return (
    <BrowserRouter> 
      <SideBar/>
      <div className="App">
        <Routes>
          <Route exact path='/playlist/:id' element={<Playlist/>}/>    
          <Route path='/' element={<Home/>}/>
        </Routes>
        {/* {selectedTrack === null ? null: <MusicPlayer track={selectedTrack} trackPaused={trackPaused}/>} */}
      </div>
    </BrowserRouter>
  );
}

export default App;