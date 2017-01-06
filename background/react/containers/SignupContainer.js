import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';


class Signup extends Component {

	constructor(props) {
		super(props);
		this.handleSignup = this.handleSignup.bind(this);
	}

	handleSignup(evt) {
		evt.preventDefault();
		const name = evt.target.name.value;
		const email = evt.target.email.value;
		const password = evt.target.password.value;
		const month = evt.target.month.value;
		const day = evt.target.day.value;


		const self = this;

		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(userObj => {
				return {
					day,
					month,
					name,
					uid: userObj.id
				}
			})
			.then(user => {
				self.props.setUserOnState(user)
			})
			.catch(console.error)

	}


	render() {
		return (
			<div className="col-md-4 col-md-offset-4">
				<form onSubmit={this.handleSignup}>
					<div className="form-group">
					  <label htmlFor="name">Name:</label>
					  <input type="name" className="form-control" name="name" />
					</div>
				  <div className="form-group">
				    <label htmlFor="email">Email:</label>
				    <input type="email" className="form-control" name="email" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="day">Day:</label>
				    <input type="number" className="form-control" name="day" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="month">Month:</label>
				    <input type="number" className="form-control" name="month" />
				  </div>
				  <div className="form-group">
				    <label htmlFor="pwd">Password:</label>
				    <input type="password" className="form-control" name="password" />
				  </div>
				  <button type="submit" className="btn btn-primary">Sign Up</button>
				</form>
			</div>
		)
	}

}

export default Signup;
