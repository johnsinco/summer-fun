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
        <div className="header">
            <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                <a className="pure-menu-heading" href="">Summer Fun!</a>

                <ul className="pure-menu-list">
                    <li className="pure-menu-item pure-menu-selected"><a href="#home" className="pure-menu-link">Home</a></li>
                    <li className="pure-menu-item"><a href="#tour" className="pure-menu-link">Tour</a></li>
                    <li className="pure-menu-item"><a href="#signup" className="pure-menu-link">Sign Up!</a></li>
                </ul>
            </div>
        </div>
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
