import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import getRouter from './router'
// import './App.css'
class App extends React.Component<object, object> {
  constructor (props: Readonly<object>) {
    super(props)
  }
  public render() {
    return (
      <Router>
        { getRouter() }
      </Router>
    );
  }
  
} 

export default App;
