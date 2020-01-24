import invoiceHistoryInitalState from '../../models/invoiceHistory/invoiceHistoryInitalState'
import IInvoiceHistoryState from '../../models/invoiceHistory/IInvoiceHistoryState'
import Action from '../../models/IAction'
import {
    GET_HISTORY_SUCCESS
} from '../actions/invoiceHistoryActions'

export default function auth(
  state = invoiceHistoryInitalState,
  { type, payload }: Action
): IInvoiceHistoryState {
  switch (type) {
    case GET_HISTORY_SUCCESS:
      return { ...state, history: payload }
    default:
      return state
  }
}
