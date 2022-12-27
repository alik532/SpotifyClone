import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    tracks: null, 
    status: 'idle',
    error: null,
}

export const fetchTracks = createAsyncThunk('tracks/fetchTracks', async (id) => {
    
    const options = {
        method: 'GET',
        url: 'https://spotify23.p.rapidapi.com/tracks/',
        params: {ids: id},
        headers: {
          'X-RapidAPI-Key': '6e02f7ad70msh20f68a0ff65e3dfp1739e7jsnadef5bc0992e',
          'Access-Control-Allow-Origin': '*',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };

    const response = await axios.request(options)
    return response.data
})

export const tracksSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchTracks.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchTracks.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.tracks = action.payload.tracks[0]
            })
            .addCase(fetchTracks.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const { selectTrack } = tracksSlice.actions
export const getSelectedTrack = (state) => state.tracks.tracks
export const selectTrackStatus = (state) => state.tracks.status
export const selectTracksError = (state) => state.tracks.error

export default tracksSlice.reducer