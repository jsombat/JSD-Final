import React, { Component } from 'react';
import firebase from './firebase.js';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: '{this.props.name}', 
      userName: '',
      userEmail: '',
      userCount: '',
      userBring: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className='form'>
        <header>
            <div className='title'>Sign Up for {this.props.name} </div>        
            </header> <hr></hr>
              
            <form className='formcopy' onSubmit={this.handleSubmit}>
                <label>Name<input type="text" name="userName" placeholder="First and Last Name" onChange={this.handleChange} value={this.state.userName} /> </label>
                <label>Email<input type="text" name="userEmail" placeholder="Email Address" onChange={this.handleChange} value={this.state.userEmail}/></label>
                <label>Number of Guests<input type="text" name="userCount" placeholder="How Many People Are Attending?" onChange={this.handleChange} value={this.state.userCount}/></label>
                <label>What Will You Bring<input type="select" name="userBring" placeholder="What can you contribute to this mini society?" onChange={this.handleChange} value={this.state.userBring}/></label>
                <button id="submit" type="submit">Submit</button>

              </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const rsvpRef = firebase.database().ref('rsvps');
    const rsvp = {
      // event: this.state.
      eventname: this.props.name,
      name: this.state.userName,
      email: this.state.userEmail,
      count: this.state.userCount,
      bring: this.state.userBring
    }
    rsvpRef.push(rsvp);
    this.setState({
      userName: '',
      userEmail: '',
      userCount: '',
      userBring: '',
    });
  }
}

export default Form;