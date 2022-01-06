import React, { useState } from 'react';
import FormInput from '../form-input/FormInput';
import CustomBtn from '../custom-btn/CustomBtn';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './styles.scss';

function SignUp() {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleDisplayName = e => setDisplayName(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleConfirmPassword = e => setConfirmPassword(e.target.value)

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

        } catch (e) {
            console.error(e);
        }

    }

    return (
        <div className='sign-up'>
            <h2 className='title'>I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleDisplayName}
                    label='Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleEmail}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handlePassword}
                    label='password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirm password'
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                    label='confirm password'
                    required
                />
                <CustomBtn type='submit' >SIGN UP</CustomBtn>
            </form>

        </div>
    )
}
export default SignUp;