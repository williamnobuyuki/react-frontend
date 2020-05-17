import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import App from './app'
import Dashboard from '../dashboard/dashboard'
import CicloPagamento from '../cicloPagamento/cicloPagamento'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={Dashboard} />
            <Route path='cicloPagamentos' component={CicloPagamento} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>
)