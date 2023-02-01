import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "../reducers/tracksReducer";
import albumReducer from "../reducers/albumReducer";
import likedReducer from "../reducers/likedReducer";

export const store = configureStore({
    reducer: {
        tracks: tracksReducer,
        albums: albumReducer,
        liked: likedReducer,
    }
})

export default store;