import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "../reducers/tracksReducer";
import albumReducer from "../reducers/albumReducer";

export const store = configureStore({
    reducer: {
        tracks: tracksReducer,
        albums: albumReducer,
    }
})

export default store;