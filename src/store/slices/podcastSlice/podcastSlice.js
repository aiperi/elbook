import {createSlice} from "@reduxjs/toolkit";


const name = 'podcast';

const initialState={
    podcasts:[],
    fetchLoading:false
}

const podcastSlice = createSlice({
    name,
    initialState,
    reducers: {
        fetchPodcastRequest(state) {
            state.fetchLoading = true;
        },
        fetchPodcastSuccess(state, action) {
            state.podcasts = action.payload;
            state.fetchLoading = false;
        },
        fetchPodcastFailure(state) {
            state.fetchLoading = false;
        },
    }
});

export default podcastSlice;