import IAction from '../../models/IAction'
export const GET_HISTORY = 'GET_HISTORY'
export const GET_HISTORY_SUCCESS = 'GET_HISTORY_SUCCESS'
export const GET_HISTORY_FAILURE = 'GET_HISTORY_FAILURE'


export const getPaymentHistory = (): IAction => ({
  type: GET_HISTORY
})

export const getPaymentHistorySuccess = (): IAction => ({
  type: GET_HISTORY_SUCCESS
})

export const getPaymentHistoryFailure = (err: Error): IAction => ({
  payload: err,
  type: GET_HISTORY_FAILURE
})