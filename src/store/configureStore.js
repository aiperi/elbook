import {combineReducers} from "redux";
import createSagaMiddleware from 'redux-saga';
import {rootSagas} from "./rootSagas";
import {configureStore} from "@reduxjs/toolkit";
import bookSlice from "./slices/bookSlice/bookSlice";
import materialSlice from "./slices/materialSlice/materialSlice";
import audioSlice from "./slices/audioSlice/audioSlice";
import videoSlice from "./slices/videoSlice/videoSlice";
import formatSlice from "./slices/formatSlice/formatSlice";
import genreSlice from "./slices/genreSlice/genreSlice";
import podcastSlice from "./slices/podcastSlice/podcastSlice";


const rootReducer = combineReducers({
    'books': bookSlice.reducer,
    'materials': materialSlice.reducer,
    'audio':audioSlice.reducer,
    'video':videoSlice.reducer,
    'format':formatSlice.reducer,
    'genre':genreSlice.reducer,
    'podcast':podcastSlice.reducer,
    // 'players':playerSlice.reducer,
    // 'carousels': carouselSlice.reducer,
    // 'comments':commentsSlice.reducer,
});


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: true,
});

sagaMiddleware.run(rootSagas);





export default store;