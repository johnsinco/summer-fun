import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

class PlayerDetail extends Component {

  state = {player: {}}

  componentWillMount() {
    var pid = this.props.match.params.id
    fetch("/players/"+pid)
      .then(res => res.json())
      .then(player => this.setState({ player }));
  }

  render() {
    var player = this.state.player
    return (
      <div className="playerDetail">
        <header className="players-header">
          <h3 className="players-title">Player Detail</h3>
        </header>
        <div className="playerDetail">
          {player.firstName} {player.lastName}
        </div>
      </div>
    );
  }
}

export default PlayerDetail;
