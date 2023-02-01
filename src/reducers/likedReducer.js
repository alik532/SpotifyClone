import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tracks: []
}


export const likedSlice = createSlice({
    name: "liked",
    initialState,
    reducers: {
        likeTrack: (state, action) => {
            state.tracks.push(action.payload)
            console.log(state.tracks)
        }
    }
})

export const { likeTrack } = likedSlice.actions

export const selectLikedTracks = (state) => state.liked.tracks

export default likedSlice.reducer