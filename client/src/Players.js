import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

class Players extends Component {

  state = {players: []}

  componentDidMount() {
    fetch('/players')
      .then(res => res.json())
      .then(players => this.setState({ players }));
  }

  render() {
    return (
      <Switch>
        <Route exact path='/players' render={(props) => (
          <div className="players">
            <header className="players-header">
              <h3 className="players-title">All Players</h3>
            </header>
              {this.state.players.map(player =>
                <div key={player.id}>{player.firstName} {player.lastName}</div>
              )}
          </div>
        )}/>
        <Route path='/players/:id' render={(props) => (
          <div className="players">
            <header className="players-header">
              <h3 className="players-title">Player Detail</h3>
            </header>
            <div>
              {this.showPlayer(props.match.params.id)}
            </div>
          </div>
        )}/>
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
    console.log('000000000='+id)
    console.log(player)
    console.log('11111')
    return(
      <div className="playerDetail">
        {player.firstName} {player.lastName}
      </div>
    )
  }
}

export default Players;
