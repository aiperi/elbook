import bookSlice from "../../slices/bookSlice/bookSlice";

export const {
    fetchBooksRequest,
    fetchBooksSuccess,
    fetchBooksFailure,
} = bookSlice.actions;