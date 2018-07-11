import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {players: []}

  componentDidMount() {
    fetch('/players')
      .then(res => res.json())
      .then(players => this.setState({ players }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">All Players</h1>
        </header>
          {this.state.players.map(player =>
            <div key={player.id}>{player.firstName} {player.lastName}</div>
          )}
      </div>
    );
  }
}

export default App;
