import React, { Component } from 'react';

class Players extends Component {

  state = {players: []}

  componentDidMount() {
    fetch('/players')
      .then(res => res.json())
      .then(players => this.setState({ players }));
  }

  render() {
    return (
      <div className="players">
        <header className="players-header">
          <h3 className="players-title">All Players</h3>
        </header>
          {this.state.players.map(player =>
            <div key={player.id}>{player.firstName} {player.lastName}</div>
          )}
      </div>
    );
  }
}

export default Players;
