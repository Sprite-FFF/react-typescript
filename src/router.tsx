import * as React from 'react'
import { Route, Switch,  BrowserRouter as Router } from 'react-router-dom'

import Todo from './view/todo'
import Login from './view/login/Index'
import Layout from './view/layout'
import HooksTodo from './view/hooksTodo/Index'
import Home from './view/home/Index'
const getRouter = () => (
    <Switch>
        <Route path="/" component={ () => (
            <Layout>
                <Router>
                    <Switch>
                        <Route path="/" component={ Home } />
                    </Switch>
                </Router>
            </Layout>
        ) } />
        <Route path="/login" component={ Login } />
        <Route path="/todo" component={ Todo } />
        <Route path="/hooksTodo" component={ HooksTodo } />
    </Switch>
)

export default getRouter