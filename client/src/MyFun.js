import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

class MyFun extends Component {

  state = {player: {}, challenges: []}

  componentWillMount() {
    var pid = this.props.match.params.id
    fetch("/players/"+pid)
      .then(res => res.json())
      .then(player => this.setState({ player }));
    fetch("/players/"+pid+"/challenges")
      .then(res => res.json())
      .then(challenges => this.setState({ challenges }));
  }

  markComplete(id) {
    fetch("/players/"+this.state.player.id+"/challenges/"+id, {
      method: 'PUT',
      body: JSON.stringify({meh: 'foo'}),
      headers: { "Content-Type": "application/json", "Accept": "application/json" }
    }).then(res => res.json())
  }

  render() {
    var player = this.state.player
    return (
      <div className="playerDetail">
        <header className="players-header">
          <h3 className="players-title">How is it going?</h3>
        </header>
        <div className="playerChallenges">
          <ul>
          {this.state.challenges.map(c =>
            <li>
              {c.name} <button onClick={() => this.markComplete(c.id)} className="button-success pure-button">I DID IT!</button></li>
          )}
          </ul>
        </div>
      </div>
    );
  }
}

export default MyFun;
