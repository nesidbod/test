import { all } from 'redux-saga/effects'
import {
  watchLogin,
  watchLoginWithPassword,
  watchLogout,
  watchSignUp
} from './saga/authSaga'
import {watchGetPaymentHistory} from './saga/invoiceHistorySaga'

export default function* saga() {
  yield all([
    watchLogin(),
    watchGetPaymentHistory(),
    watchLogout(),
    watchSignUp(),
    watchLoginWithPassword()
  ])
}
