import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import PlayerDetail from './PlayerDetail'
import EditPlayer from './EditPlayer'

class Players extends Component {

  state = {players: []}

  componentWillMount() {
    fetch('/players')
      .then(res => res.json())
      .then(players => this.setState({ players }));
  }

  render() {
    return (
      <Switch>
        <Route exact path='/players' render={(props) => (
          <div className="pure-g">
          <div className="content">
            <div className="header">
              <h3 className="content-head is-center">All Players</h3>
            </div>
            <div className="pure-u-5-5">
              <ul>
                {this.state.players.map(player =>
                  <li>
                    <Link to={`/players/${player.id}`}>{player.firstName} {player.lastName}</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          </div>
        )}/>
        <Route path='/players/:id/edit' component={EditPlayer} />
        <Route path='/players/:id' component={PlayerDetail} />
      </Switch>
    );
  }

  showPlayer(id) {

    var player = this.state.players.find(p => (parseInt(id) === p.id))
    if(player === undefined) {
      return(
        <div>Player Not Found</div>
      )
    }
    return(
      <div className="playerDetail">
        {player.firstName} {player.lastName}
      </div>
    )
  }
}

export default Players;
