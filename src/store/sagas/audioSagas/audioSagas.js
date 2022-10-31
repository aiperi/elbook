import {put, takeEvery} from 'redux-saga/effects';
import {toast} from "react-toastify";
import axiosApi from "../../../axiosApi";
import {fetchAudioFailure, fetchAudioRequest, fetchAudioSuccess} from "../../actions/audioActions/audioActions";



export function* fetchAudiosSagas() {
    try {
        const response = yield axiosApi.get('/audiobook/');
        yield put(fetchAudioSuccess(response.data));
    } catch (e) {
        toast.error('Не удалось загрузить аудио-книги');
        yield put(fetchAudioFailure());
    }
}



const audiosSaga = [
    takeEvery(fetchAudioRequest, fetchAudiosSagas),
];

export default audiosSaga;