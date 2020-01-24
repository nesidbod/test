import { connect } from 'react-redux'
import IRootState from '../../models/rootState'
import {
  setBillingInfo,
  getBillingInfo
} from '../../redux/actions/billingInfoActions'

import BillingInformations from './BillingInformations'

const mapStateToProps = (state: IRootState) => ({
  name: state.billingInfo.name,
  email: state.billingInfo.email,
  card: state.billingInfo.cvv,
  cvv: state.billingInfo.cvv,
  date: state.billingInfo.date
})

const mapDispatchToProps = {
  setBillingInfo,
  getBillingInfo
}

const BillingInformationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BillingInformations as any)

export default BillingInformationsContainer
