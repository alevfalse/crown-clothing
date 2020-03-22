import React, { Component } from 'react'

class SignIn extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<input
						type='email'
						name='email'
						id='email'
						value={this.state.email}
						required
					/>
					<label htmlFor='email'>Email</label>
					<input
						type='password'
						name='password'
						id='password'
						value={this.state.password}
						required
					/>
					<label htmlFor='password'>Password</label>

					<input type='submit' value='Submit' />
				</form>
			</div>
		)
	}
}

export default SignIn
