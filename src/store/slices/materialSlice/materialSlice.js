import {createSlice} from "@reduxjs/toolkit";

const name = 'materials';

const initialState = {
    materials: [],
    fetchLoading: false,
}

const materialSlice = createSlice({
    name,
    initialState,
    reducers: {
        fetchMaterialsRequest(state) {
            state.fetchLoading = true;
        },
        fetchMaterialsSuccess(state, action) {
            state.materials = action.payload;
            state.fetchLoading = false;
        },
        fetchMaterialsFailure(state) {
            state.fetchLoading = false;
        },
    }
});

export default materialSlice;