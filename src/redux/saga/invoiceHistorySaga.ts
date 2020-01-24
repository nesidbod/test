import { call, put, takeEvery } from 'redux-saga/effects'
import {
  getInvoiceHistory
} from '../../clients/settingClient'
import {
  GET_HISTORY_SUCCESS,
  GET_HISTORY_FAILURE,
  GET_HISTORY
} from '../actions/invoiceHistoryActions'


export function* getpaymentHistory() {
  try {
    const history = yield call(getInvoiceHistory)
    yield put({ type: GET_HISTORY_SUCCESS,payload:history })
  } catch (error) {
    yield put({ type: GET_HISTORY_FAILURE})
  }
}

export function* watchGetPaymentHistory() {
  yield takeEvery(GET_HISTORY, getpaymentHistory)
}
