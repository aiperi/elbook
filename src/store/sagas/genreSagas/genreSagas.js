import {put, takeEvery} from 'redux-saga/effects';
import axiosApi from "../../../axiosApi";
import {fetchGenreRequest, fetchGenreSuccess} from "../../actions/genreActions/genreActions";


export function* fetchGenreSagas() {
    try {
        const response = yield axiosApi.get('/genre/');
        yield put(fetchGenreSuccess(response.data));
    } catch (e) {
        console.log(e)
    }
}


const genreSaga = [
    takeEvery(fetchGenreRequest, fetchGenreSagas),
];

export default genreSaga;