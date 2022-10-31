import {createSlice} from "@reduxjs/toolkit";

const name = 'audio';

const initialState = {
    audio: [],
    fetchLoading: false,
}

const audioSlice = createSlice({
    name,
    initialState,
    reducers: {
        fetchAudioRequest(state) {
            state.fetchLoading = true;
        },
        fetchAudioSuccess(state, action) {
            state.audio = action.payload;
            state.fetchLoading = false;
        },
        fetchAudioFailure(state) {
            state.fetchLoading = false;
        },
    }
});

export default audioSlice;