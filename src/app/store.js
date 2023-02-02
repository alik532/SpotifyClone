import { configureStore } from "@reduxjs/toolkit";
import getTrackReducer from "../reducers/getTrackReducer";
import albumReducer from "../reducers/albumReducer";

export const store = configureStore({
    reducer: {
        tracks: getTrackReducer,
        albums: albumReducer,
    }
})

export default store;