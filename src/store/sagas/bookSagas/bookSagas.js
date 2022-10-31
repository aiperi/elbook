import {put, takeEvery} from 'redux-saga/effects';
import {toast} from "react-toastify";
import axiosApi from "../../../axiosApi";
import {fetchBooksFailure, fetchBooksRequest, fetchBooksSuccess} from "../../actions/bookActions/bookActions";



export function* fetchBooksSagas({payload}) {

    try {
        if(payload){
            const response = yield axiosApi.get('/ebook/'+payload);
            yield put(fetchBooksSuccess(response.data));
        }else{
            const response = yield axiosApi.get('/ebook/');
            yield put(fetchBooksSuccess(response.data));
        }

    } catch (e) {
        toast.error('Не удалось загрузить электронные книги');
        yield put(fetchBooksFailure());
    }
}



const booksSaga = [
    takeEvery(fetchBooksRequest, fetchBooksSagas),
];

export default booksSaga;