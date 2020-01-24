import { connect } from 'react-redux'
import IRootState from '../../models/rootState'
import { getPaymentHistory } from '../../redux/actions/invoiceHistoryActions'

import InvoiceHistory from './InvoiceHistory'

const mapStateToProps = (state: IRootState) => ({
  data: state.invoiseHisroty.history
})

const mapDispatchToProps = {
  getPaymentHistory
}

const InvoiceHistoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceHistory as any)

export default InvoiceHistoryContainer
