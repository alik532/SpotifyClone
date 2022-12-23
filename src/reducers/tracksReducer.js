import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import ids from '../trackIDs'

const initialState = {
    tracks: [], 
    status: 'idle',
    error: null,
    selectedTrack: null,
}

export const fetchTracks = createAsyncThunk('tracks/fetchTracks', async () => {

    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/tracks/',
        params: {ids: ids},
        headers: {
          'X-RapidAPI-Key': '21984204b7msh3267a67b6624b0ep1c87b2jsn6053aef7f9e6',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };

    const response = await axios.request(options)
    return response.data
})

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {
        selectTrack: (state, action) => {
            console.log(action.payload)
            state.selectedTrack = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchTracks.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchTracks.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log(action.payload)
                state.tracks = action.payload.tracks
            })
            .addCase(fetchTracks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { selectTrack } = tracksSlice.actions
export const selectAllTracks = (state) => state.tracks.tracks
export const selectTrackStatus = (state) => state.tracks.status
export const selectTracksError = (state) => state.tracks.error
export const getSelectedTrack = (state) => state.tracks.selectedTrack

export default tracksSlice.reducer