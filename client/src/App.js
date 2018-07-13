import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Players from './Players'
import Home from './Home'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Summer Fun!</h1>
        </header>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home}/>
            <Route path='/players' component={Players}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
