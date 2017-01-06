import React, { Component } from 'react';

import Signup from './SignupContainer';

export default class AppContainer extends Component {

  render () {

  	const user = firebase.auth().currentUser;
  	console.log('current user is', user)

    return (
      <div>
      	{ user ?
      		<h2> There is a user signed in!</h2> :
      		<div>
	      		<h2> There is no user signed in </h2>
	      		<Signup />
      		</div>
      	}
        <img src="http://lorempixel.com/400/200" />
      </div>
    )
  }
}