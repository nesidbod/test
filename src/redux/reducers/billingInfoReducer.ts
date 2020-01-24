import billingInfoInitalState from '../../models/billingInfo/billingInfoInitalState'
import IBillingInfoState from '../../models/billingInfo/IBillingInfoState'
import Action from '../../models/IAction'
import {
    GET_BILLING_INFO_SUCCESS
} from '../actions/billingInfoActions'

export default function auth(
  state = billingInfoInitalState,
  { type, payload }: Action
): IBillingInfoState {
  switch (type) {
    case GET_BILLING_INFO_SUCCESS:
      return { ...state, name: payload.name, email: payload.email, card: payload.card }
    default:
      return state
  }
}
