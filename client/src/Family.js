import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

class Family extends Component {

  state = {players: []}

  componentWillMount() {
    var famid = this.props.match.params.id
    fetch("/family/"+famid)
      .then(res => res.json())
      .then(players => this.setState({ players }));
  }

  render() {
    var player = this.state.player
    return (
      <div className="familyHome">
        <header className="players-header">
          <h3 className="players-title">Family Home</h3>
        </header>
        <div className="players">
          <ul>
          {this.state.players.map(player =>
            <li>
              <Link to={`/myfun/${player.id}`}>{player.firstName} {player.lastName}</Link>
            </li>
          )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Family;
