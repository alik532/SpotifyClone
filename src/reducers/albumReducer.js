import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    albums: [],
    status: "idle",
    error: null,
    selectedAlbum: null,
}

export const fetchAlbums = createAsyncThunk('albums/fetchAlbums', async () => {

    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/albums/',
        params: {ids: '3IBcauSj5M2A6lTeffJzdv,4m2880jivSbbyEGAKfITCa,7jPoliCU7TRA13Wro32AOD,3cQO7jp5S9qLBoIVtbkSM1,3cfAM8b8KqJRoIzt3zLKqw'},
        headers: {
          'X-RapidAPI-Key': '21984204b7msh3267a67b6624b0ep1c87b2jsn6053aef7f9e6',
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
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchAlbums.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchAlbums.fulfilled, (state, action) => {
                console.log(action.payload)
                state.status = "succeeded"
                state.albums = action.payload.albums
            })
            .addCase(fetchAlbums.rejected, (state, action) => {
                state.status = 'failed'
                console.log(action.error.message)
                state.error = action.error.message
            })
    }
})

export const { selecAlbum } = albumsSlice.actions

export const selectAllAlbums = (state) => state.albums.albums
export const selectAlbumError = (state) => state.albums.error
export const selectAlbumStatus = (state) => state.albums.status
export const getSelectedAlbum = (state) => state.albums.selectedAlbum

export default albumsSlice.reducer
