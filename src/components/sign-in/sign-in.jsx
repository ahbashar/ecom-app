import React from 'react';

import FromInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.scss';

class SignIn extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

		handelSubmit = async event => {
			event.preventDefault();

			const {email,password} = this.state;

			try{
				await auth.signInWithEmailAndPassword(email,password);
				this.setState({email: '', password: ''})
			}catch(erorr){
				console.log(erorr);
			}
		}

		handelChange = event => {
			const { value,name } = event.target;
			this.setState({ [name]: value});
		}

	render(){
		return(
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password.</span>

				<form onSubmit={this.handelSubmit}>
					<FromInput
					 name='email'
					 type='email'
					 handelChange={this.handelChange}
					 value={this.state.email}
					 label ='email'
					 required 
					/>

					<FromInput
					 name='password'
					 type='password'
					 value={this.state.password}
					 handelChange={this.handelChange}
					    label='password'
					    required
					/>
					<div className='buttons'>
						<CustomButton type='submit'> Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
						Sign in with google
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn;