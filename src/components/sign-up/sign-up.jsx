import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import './sign-up.scss';

class SignUp extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handelSubmit = async event => {
		event.preventDefault();

		const {displayName, email, password, confirmPassword} = this.state;

		if(password !== confirmPassword){
			alert("Passwords don't match");
			return;
		}

		try{
			const { user } = await auth.createUserWithEmailAndPassword(email,password);
			await createUserProfileDocument(user, {displayName})

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			})
		}catch(erorr){
			console.log(erorr);
		}
	}

	handelChange = event =>{
		const {name,value} = event.target;
		this.setState({[name]: value})
	}

	render() {
		const {displayName, email, password, confirmPassword} = this.state;
		return(
			<div className='sign-up'>
				<h2 className='title'>i do not have an account</h2>
				<span>Sign up with your email and password</span>
				<form className='sign-up-form' onSubmit={this.handelSubmit}>
					<FormInput 
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handelChange}
						label='Display Name'
						required
					/>
					<FormInput 
						type='email'
						name='email'
						value={email}
						onChange={this.handelChange}
						label='Email'
						required
					/>
					<FormInput 
						type='password'
						name='password'
						value={password}
						onChange={this.handelChange}
						label='Password'
						required
					/>
					<FormInput 
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handelChange}
						label='Confirm Password'
						required
					/>

					<CustomButton type='submit'> Sign Up</CustomButton>
				</form>
			</div>
		)
	}
}

export default SignUp;