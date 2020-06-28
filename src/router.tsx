import * as React from 'react'
import { Route, Switch } from 'react-router'

import Todo from './view/todo'
import Login from './view/login/Index'
import Layout from './view/layout'
import HooksTodo from './view/hooksTodo/Index'
const getRouter = () => (
    <Switch>
        <Route path="/" exact={ true } component={ Layout } />
        <Route path="/login" component={ Login } />
        <Route path="/todo" component={ Todo } />
        <Route path="/hooksTodo" component={ HooksTodo } />
    </Switch>
)

export default getRouter