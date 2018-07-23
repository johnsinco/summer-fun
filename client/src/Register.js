import React, { Component } from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    var pid = this.props.match.params.id
    if(pid !== undefined) {
      fetch("/players/"+pid)
      .then(res => res.json())
      .then(player => this.setState({ firstName: player.firstName, lastName: player.lastName }));
    }
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(event.target)
    const data = this.state
    console.log(data)
    fetch('/players', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    }).then(res => res.json()).then(res => console.log(res))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          first name:
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          last name:
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}



export default Register
