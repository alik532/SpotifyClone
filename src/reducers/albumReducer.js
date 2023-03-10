import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    albums: [],
    status: "idle",
    error: null,
    selectedAlbum: null,
    allTracks: []
}

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {

    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/albums/',
        params: {ids: '3IBcauSj5M2A6lTeffJzdv,4m2880jivSbbyEGAKfITCa,7jPoliCU7TRA13Wro32AOD,3cQO7jp5S9qLBoIVtbkSM1,3cfAM8b8KqJRoIzt3zLKqw,4bTfyrDHiBOV0rEV8EG1ua,6pUg9RDDoVyQQVJ48FkmXz,30WNa86MJsrzTlki1YHI6A,2cWBwpqMsDJC1ZUwz813lo,2Ti79nwTsont5ZHfdxIzAm,7JOCOjZTcLysDMkZGWlcIj,6jKZplJpy21R5lHaYHHjmZ,0SrskI3mHcu5MzKeZNv2f6,4yP0hdKOZPNshxUOjY0cZj,2mumCpGmuE9iDeOvMx6XrB,0h2knr6qpiAq0tV5ri5JMF,1pCA38N6MkLlthXtAOvZTU,6trNtQUgC8cgbWcqoMYkOR,4c2p3TdN7NcQfCXyueCNnC,4otkd9As6YaxxEkIjXPiZ6'},
        headers: {
          'X-RapidAPI-Key': '6e02f7ad70msh20f68a0ff65e3dfp1739e7jsnadef5bc0992e',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
          'Access-Control-Allow-Origin': "*",
        }
    };

    const response = await axios.request(options)
    return response.data
})


export const albumsSlice = createSlice({
    name: "albums",
    initialState,
    reducers: {
        selectAlbum: (state, action) => {
            state.selectedAlbum = action.payload
        },
        likeTrack: (state, action) => {
            let tr = state.allTracks.filter(track => track.id === action.payload)[0]
            let val = !tr.liked
            tr.liked = val
            state.albums.filter(album => album.name === tr.album)[0].tracks.items.filter(track => track.id === tr.id)[0].liked = val 
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAlbums.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchAlbums.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.albums = validateAlbums(action.payload.albums)
                state.allTracks = setAllTracks(state.albums)
            })
            .addCase(fetchAlbums.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { selecAlbum, likeTrack } = albumsSlice.actions

export const selectAllAlbums = (state) => state.albums.albums
export const selectAlbumError = (state) => state.albums.error
export const selectAlbumStatus = (state) => state.albums.status
export const getSelectedAlbum = (state) => state.albums.selectedAlbum
export const getAllTracks = (state) => state.albums.allTracks

export default albumsSlice.reducer

const validateAlbums = (albums) => {
    const coloredAlbums = albums.map(album => {return {...album, color: ["#1b1283", "#831266", "#831212", "#168312", "#9f9b13"][Math.floor(Math.random() * 4)]}})
    return coloredAlbums.map(album => {
        album.tracks.items.map(track => {
            let toAdd = {album: album.name, img: album.images[1].url, liked: false}
            Object.assign(track, toAdd)
            return track
        })
        return album
    })
}

const setAllTracks = (albums) => {
    let result = []
    albums.forEach(album => {
        album.tracks.items.forEach(track => {
            result.push(track)
        })
    })
    return result
}