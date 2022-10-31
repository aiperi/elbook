import {createSlice} from "@reduxjs/toolkit";

const name = 'books';

const initialState = {
    books: [],
    // oneComment: {},
    // singleLoading: false,
    fetchLoading: false,
    pageCount:0
}

const bookSlice = createSlice({
    name,
    initialState,
    reducers: {
        fetchBooksRequest(state) {
            state.fetchLoading = true;
        },
        fetchBooksSuccess(state, action) {
            state.books = action.payload;
            const count = action.payload.count
            state.pageCount = Math.ceil(count/9);
            state.fetchLoading = false;
        },
        fetchBooksFailure(state) {
            state.fetchLoading = false;
        },
    }
});

export default bookSlice;