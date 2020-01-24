import { connect } from 'react-redux'
import IRootState from '../../models/rootState'

import Plan from './Plan'

const mapStateToProps = (state: IRootState) => ({

})

const mapDispatchToProps = {
}

const PlanContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Plan as any)

export default PlanContainer
