import React, { Component } from 'react';

class EditPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const data = new FormData(event.target);
    fetch('/players', {
      method: 'POST',
      body: data,
    }).then(res => console.log(res))
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



export default EditPlayer
