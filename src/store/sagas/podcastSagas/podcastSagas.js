import {put, takeEvery} from 'redux-saga/effects';
import {toast} from "react-toastify";
import axiosApi from "../../../axiosApi";
import {fetchAudioFailure, fetchAudioRequest, fetchAudioSuccess} from "../../actions/audioActions/audioActions";
import {
    fetchPodcastFailure,
    fetchPodcastRequest,
    fetchPodcastSuccess
} from "../../actions/podcastActions/podcastActions";



export function* fetchPodcastSagas() {
    try {
        const response = yield axiosApi.get('/podcast/');
        yield put(fetchPodcastSuccess(response.data));
    } catch (e) {
        toast.error('Не удалось загрузить аудио-книги');
        yield put(fetchPodcastFailure());
    }
}



const podcastSaga = [
    takeEvery(fetchPodcastRequest, fetchPodcastSagas),
];

export default podcastSaga;