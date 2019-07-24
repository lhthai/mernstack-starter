import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './components/Loading'

const Home = Loadable({ loader: () => import('./containers/Home'), loading: Loading, })
const NotFound = Loadable({ loader: () => import('./components/NotFound'), loading: Loading, })

function Routes(props) {
    return (
        <Switch>
            <Route component={Home} exact path="/" />

            { /* Finally, catch all unmatched routes */}
            <Route component={NotFound} />
        </Switch>
    )
}

export default Routes
