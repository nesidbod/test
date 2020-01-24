import { connect } from 'react-redux'
import IRootState from '../../models/rootState'

import PaymentSettings from './PaymentSettings'

const mapStateToProps = (state: IRootState) => ({

})

const mapDispatchToProps = {
}

const PaymentSettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentSettings as any)

export default PaymentSettingsContainer
