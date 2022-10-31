import {put, takeEvery} from 'redux-saga/effects';
import {toast} from "react-toastify";
import axiosApi from "../../../axiosApi";
import {fetchVideoFailure, fetchVideoRequest, fetchVideoSuccess} from "../../actions/videoActions/videoActions";



export function* fetchVideoSagas() {
    try {
        const response = yield axiosApi.get('/video/');
        yield put(fetchVideoSuccess(response.data));
    } catch (e) {
        toast.error('Не удалось загрузить видео');
        yield put(fetchVideoFailure());
    }
}



const videoSagas = [
    takeEvery(fetchVideoRequest, fetchVideoSagas),
];

export default videoSagas;