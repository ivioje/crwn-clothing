import React from 'react';
import FormInput from '../form-input/FormInput';
import './signIn.styles.scss';
import CustomBtn from '../custom-btn/CustomBtn';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({ email: '', password: '' })
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='text'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        title='please fill out this field'
                        required />

                    <FormInput
                        name='password'
                        type='password'
                        onChange={this.handleChange}
                        value={this.state.password}
                        label='password'
                        required />
                    <div className='buttons'>
                        <CustomBtn type='submit' >sign in</CustomBtn>
                        <CustomBtn onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            sign in with google {' '}
                        </CustomBtn>

                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;