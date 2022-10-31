import {createSlice} from "@reduxjs/toolkit";

const name = 'video';

const initialState = {
    videos:[],
    fetchLoading:false
}

const videoSlice = createSlice({
    name,
    initialState,
    reducers:{
        fetchVideoRequest(state){
            state.fetchLoading = true
        },
        fetchVideoSuccess(state, action) {
            state.videos = action.payload;
            state.fetchLoading = false;
        },
        fetchVideoFailure(state) {
            state.fetchLoading = false;
        },
    }
});

export default videoSlice;