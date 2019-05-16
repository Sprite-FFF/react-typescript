import * as React from 'react'
import { Route, Switch } from 'react-router'

import Todo from './view/todo'

const getRouter = () => (
    <Switch>
        <Route path="/todo" component={ Todo } />
    </Switch>
)

export default getRouter