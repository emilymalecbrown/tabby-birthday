import React, { Component } from 'react';


class Signup extends Component {

	constructor(props) {
		super(props);
	}

	handleSignup(evt) {
		evt.preventDefault();
		const name = evt.target.name.value;
		const email = evt.target.email.value;
		const password = evt.target.password.value;

		console.log('name, email, pw', name, email, password)
		console.log('firebase is', firebase)

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then((thing) => { console.log('got a thing!', thing) })
			.catch(console.error)

	}

	render() {
		return (
			<form onSubmit={this.handleSignup}>
				<label htmlFor="name">Name</label>
				<input name="name" type="text" />
				<label htmlFor="name">Email</label>
				<input name="email" type="email" />
				<label htmlFor="name">Password</label>
				<input name="password" type="password" />
				<button type="submit">Submit!</button>
			</form>
		)
	}

}

export default Signup;
