import {createSlice} from "@reduxjs/toolkit";

const name = 'genre';

const initialState = {
    genres: [],
    fetchLoading: false
}

const genreSlice = createSlice({
    name,
    initialState,
    reducers: {
        fetchGenreRequest(state) {
            state.fetchLoading = true;
        },
        fetchGenreSuccess(state, action) {
            state.genres = action.payload;
            state.fetchLoading = false;
        },
    }
});

export default genreSlice;