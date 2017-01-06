import React, { Component } from 'react';

import Signup from './SignupContainer';
import HBD from '../components/HBD';

export default class AppContainer extends Component {

	constructor() {
		super();
		const user = firebase.auth().currentUser;
		const dateObj = new Date();
		const month = dateObj.getUTCMonth() + 1;
		const day = dateObj.getUTCDate();

		this.state = {
			user,
			currDateObj: { month, day }

		};
		this.setUserOnState = this.setUserOnState.bind(this);
		this.setState = this.setState.bind(this);
	}

	setUserOnState(user) {
		this.setState({user: user});
	}

  render () {

    return (
      <div>
      	{ this.state.user ?
      		<HBD /> :
      		<Signup user={this.state.user} setUserOnState={this.setUserOnState} />
      	}
      </div>
    )
  }
}