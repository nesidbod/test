import { connect } from 'react-redux'
import IRootState from '../../models/rootState'

import Feedback from './Feedback'

const mapStateToProps = (state: IRootState) => ({

})

const mapDispatchToProps = {
}

const FeedbackContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Feedback as any)

export default FeedbackContainer
