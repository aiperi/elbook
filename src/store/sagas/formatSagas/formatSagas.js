import {put, takeEvery} from 'redux-saga/effects';
import axiosApi from "../../../axiosApi";
import {fetchFormatRequest, fetchFormatSuccess} from "../../actions/formatActions/formatActions";


export function* fetchFormatSagas() {
    try {
        const response = yield axiosApi.get('/format/');
        yield put(fetchFormatSuccess(response.data));
    } catch (e) {
        console.log(e)
    }
}


const formatsSaga = [
    takeEvery(fetchFormatRequest, fetchFormatSagas),
];

export default formatsSaga;