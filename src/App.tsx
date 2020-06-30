import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import getRouter from './router'
// tslint:disable-next-line: no-console
import { hot } from 'react-hot-loader'
import './App.css'
class App extends React.Component<object, object> {
  constructor (props: Readonly<object>) {
    super(props)
  }
  public render() {
    return (
      <Router>
        { getRouter() }
        {/* <getRouter /> */}
      </Router>
    );
  }
} 
// const App: React.SFC = () => {
//   return <Router> {getRouter()} </Router>
// }

export default hot(module)(App)
