import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

class Challenges extends Component {

  state = {challenges: []}

  componentDidMount() {
    fetch('/challenges')
      .then(res => res.json())
      .then(challenges => this.setState({ challenges }));
  }

  render() {
    return (
      <div className="Challenges">
        <ul>
          {this.state.challenges.map(c =>
            <li>
              {c.name}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Challenges;
