import React, { Component } from 'react';

import './sign-in.styles.scss';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {email, password} = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({email: '', password: ''})
    } catch(error){
      console.log(error);
    }
  }
  ;

  render () {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            label='Password'
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className='buttons'>
          <CustomButton
            type='submit'
            value='Submit Form'
          >
            SIGN IN
          </CustomButton>
          <CustomButton
            isGoogleSignIn
            onClick={signInWithGoogle}
          >Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;