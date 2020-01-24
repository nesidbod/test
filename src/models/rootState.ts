import IAuthState from './auth/IAuthState'
import IInvoiceHistoryState from './invoiceHistory/IInvoiceHistoryState'
import IBillingInfoState from './billingInfo/IBillingInfoState'

export default interface IRootState {
  auth: IAuthState
  invoiseHisroty: IInvoiceHistoryState
  billingInfo: IBillingInfoState
}
