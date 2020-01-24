import * as React from 'react'
import { Route } from 'react-router'
import { ConnectedRouter, routerActions } from 'react-router-redux'
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper'
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import LoadingSpinner from './sComponents/loading/LoadingSpinnerContainer'

import IRootState from './models/rootState'

const locationHelper = locationHelperBuilder({})

const userIsNotAuthenticated = connectedRouterRedirect({
  allowRedirectBack: false,
  authenticatedSelector: (state: IRootState) => !state.auth.isAuthenticated,
  redirectPath: (state: IRootState, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) ||
    '/main page',
  wrapperDisplayName: 'UserIsNotAuthenticated'
}) as any

const userIsAuthenticated = connectedRouterRedirect({
  authenticatedSelector: (state: IRootState) => state.auth.isAuthenticated || state.auth.isAuthenticating ,
  redirectAction: routerActions.replace,
  redirectPath: '/about',
  wrapperDisplayName: 'UserIsAuthenticated'
}) as any

const redirectToMainPage = connectedRouterRedirect({
  authenticatedSelector: (state: IRootState) => false,
  redirectAction: routerActions.replace,
  redirectPath: (state: IRootState, ownProps) => {
    if (state.auth.isAuthenticated) {
      return locationHelper.getRedirectQueryParam(ownProps) ||
    'main page'
    } else {
      return '/login'
    }
  },
  wrapperDisplayName: 'redirectToEvent'
}) as any

const routes = [
  {
    component: userIsAuthenticated(Invite),
    path: '/payment-setting',
    exact: true
  },
  {
    component: userIsAuthenticated(Invite),
    path: '/feedback',
    exact: true
  },
  {
    component: userIsAuthenticated(Invite),
    path: '/plan',
    exact: true
  },
  {
    component: userIsNotAuthenticated(),
    path: '/login',
    exact: true
  },
  {
    component: redirectToMainPage(),
    path: '/',
    exact: true
  }
]

const renderSubRoutes = (route: any) => (props: any) => (
  <route.component {...props} routes={route.routes} />
)

export const RouteWithSubRoutes = (route: any) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={renderSubRoutes(route)}
  />
)

interface IRoutesProps {
  history: any
}

export const Routes: React.SFC<IRoutesProps> = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div className="main-page-container">
        <LoadingSpinner />
        <div className="main-body">
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} history={history} />
          ))}
        </div>
      </div>
    </ConnectedRouter>
  )
}
