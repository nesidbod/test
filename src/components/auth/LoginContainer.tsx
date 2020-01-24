import { connect } from 'react-redux'
import IRootState from '../../models/rootState'
import { clearAuthError, loginWithPassword } from '../../redux/actions/authActions'
import Login from './Login'

const mapStateToProps = (state: IRootState) => ({
  auth: state.auth
})

const mapDispatchToProps = {
  clearAuthError,
  loginWithPassword
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer
