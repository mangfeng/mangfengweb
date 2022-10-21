import { take, put, call, fork, select, takeEvery, all } from 'redux-saga/effects'
import request from '../service/request'
import * as action from '../action/index'
import config from '../../config'


export function* getAllProducts() {
  const products = yield call(request,config.apiUrl+"/index.php?t=recommend")
  yield put(action.stateChange(products.data))
}


// 监听action
export function* watchGetList(){
  yield takeEvery("TOGGLE_TODO",getAllProducts)
}


function* mySaga() {
  //yield all([
    yield fork(watchGetList)
  //]);
}


export default mySaga;