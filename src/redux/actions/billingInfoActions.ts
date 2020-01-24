import IAction from '../../models/IAction'
export const SET_BILLING_INFO = 'SET_BILLING_INFO'
export const SET_BILLING_INFO_SUCCESS = 'SET_BILLING_INFO_SUCCESS'
export const SET_BILLING_INFO_FAILURE = 'SET_BILLING_INFO_FAILURE'

export const GET_BILLING_INFO = 'GET_BILLING_INFO'
export const GET_BILLING_INFO_SUCCESS = 'GET_BILLING_INFO_SUCCESS'
export const GET_BILLING_INFO_FAILURE = 'GET_BILLING_INFO_FAILURE'

export const setBillingInfo = (name: string, email: string, card: number, cvv: number, date: string): IAction => ({
    payload: { name, email, card, cvv, date },
    type: SET_BILLING_INFO
})

export const setBillingInfoSuccess = (): IAction => ({
    type: SET_BILLING_INFO_SUCCESS
})

export const setBillingInfoFailure = (): IAction => ({
    type: SET_BILLING_INFO_SUCCESS
})

export const getBillingInfo = (): IAction => ({
    type: GET_BILLING_INFO
})

export const getBillingInfoSuccess = (): IAction => ({
    type: GET_BILLING_INFO_SUCCESS
})

export const getPaymentHistoryFailure = (err: Error): IAction => ({
    payload: err,
    type: GET_BILLING_INFO_FAILURE
})