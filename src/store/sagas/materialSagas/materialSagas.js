import {put, takeEvery} from 'redux-saga/effects';
import {toast} from "react-toastify";
import axiosApi from "../../../axiosApi";
import {
    fetchMaterialsFailure,
    fetchMaterialsRequest,
    fetchMaterialsSuccess
} from "../../actions/materialActions/materialActions";


export function* fetchMaterialsSagas() {
    try {
        const response = yield axiosApi.get('/reading/');
        yield put(fetchMaterialsSuccess(response.data));
    } catch (e) {
        toast.error('Не удалось загрузить материалы');
        yield put(fetchMaterialsFailure());
    }
}


const materialsSaga = [
    takeEvery(fetchMaterialsRequest, fetchMaterialsSagas),
];

export default materialsSaga;