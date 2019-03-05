import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todo from './view/todo/index'
import Layout from './view/layout/index'
import './App.css'

class App extends React.Component<object, object> {
  constructor (props: Readonly<object>) {
    super(props)
  }
  public render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Layout} />
          <Route path="/todo" component={Todo} />
        </div>
      </Router>
    );
  }
  
} 

export default App;
