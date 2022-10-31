import {createSlice} from "@reduxjs/toolkit";

const name = 'format';

const initialState = {
    formats: [],
    fetchLoading: false
}

const formatSlice = createSlice({
    name,
    initialState,
    reducers: {
        fetchFormatRequest(state) {
            state.fetchLoading = true;
        },
        fetchFormatSuccess(state, action) {
            state.formats = action.payload;
            state.fetchLoading = false;
        },
    }
});

export default formatSlice;