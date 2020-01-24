import * as React from 'react'
import IAuthState from '../../models/auth/IAuthState'
import IAction from '../../models/IAction'
import '../../styles/auth/Login.css'


interface ILoginProps {
  auth: IAuthState
  clearAuthError(): IAction
  loginWithPassword(email: string, password: string): IAction
}

export default class Login extends React.Component<ILoginProps, {}> {
  public render() {
    return (<React.Fragment />)
  }

}
