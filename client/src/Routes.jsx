import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from './containers/Home'

function Routes(props) {
    return (
        <Switch>
            <Route component={Home} exact path="/" />
        </Switch>
    )
}

export default Routes
