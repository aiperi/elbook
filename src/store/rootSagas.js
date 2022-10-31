import {all} from 'redux-saga/effects';
import booksSaga from "./sagas/bookSagas/bookSagas";
import materialSaga from "./sagas/materialSagas/materialSagas";
import audioSaga from "./sagas/audioSagas/audioSagas";
import videoSagas from "./sagas/videoSagas/videoSagas";
import formatSagas from "./sagas/formatSagas/formatSagas";
import genreSagas from "./sagas/genreSagas/genreSagas";
import podcastSagas from "./sagas/podcastSagas/podcastSagas";

export function* rootSagas() {
    yield all([
        ...booksSaga,
        ...materialSaga,
        ...audioSaga,
        ...videoSagas,
        ...formatSagas,
        ...genreSagas,
        ...podcastSagas,
        // ...serviceSagas,
        // ...playerSagas,
        // ...carouselsSagas,
        // ...commentsSagas,
    ]);
}