import * as React from 'react'
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux'
import { Routes } from './routes'
import AuthLoader from './components/auth/AuthLoaderContainer'

export default class App extends React.Component {
  render() {
    return (
        <React.Fragment>
            <Provider store={this.props.store}>
              <CookiesProvider>
                <AuthLoader>
                  <Routes history={this.props.history} />
                </AuthLoader>
              </CookiesProvider>
            </Provider>
        </React.Fragment>
    )
  }
}
