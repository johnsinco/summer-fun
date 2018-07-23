import React, { Component } from 'react';
import { BrowserRouter,  Route } from 'react-router-dom'
import Players from './Players'
import EditPlayer from './EditPlayer'
import Challenges from './Challenges'
import Register from './Register'
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
            <Route path='/players/new' component={EditPlayer}/>
            <Route path='/challenges' component={Challenges}/>
            <Route path='/register' component={Register}/>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
