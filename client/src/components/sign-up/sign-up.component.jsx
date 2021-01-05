import React, {useState} from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signUpStart } from '../../redux/user/user.actions';
import './sign-up.styles.scss';

const SignUp = ({ signUpStart } ) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: '',
        email: '', 
        password: '',
        confirmPassword: ''
    });
    const {displayName, email, password, confirmPassword} = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();
        if(password !== confirmPassword){
            alert(`Passwords don't match.`);
            return;
        }

        signUpStart({ displayName, email, password});
    }

    const handleChange = e => {
        const {name, value} = e.target;
        setUserCredentials({...userCredentials,[name]: value});
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span className="">Sign up with your email and password</span>
            <form onSubmit={handleSubmit} className="sign-up-form">
                <FormInput type='text' name='displayName' value={displayName} 
                onChange={handleChange} label='Display Name' required />
                <FormInput type='text' name='email' value={email} 
                onChange={handleChange} label='Email' required />
                <FormInput type='password' name='password' value={password} 
                onChange={handleChange} label='Password' required />
                <FormInput type='password' name='confirmPassword' value={confirmPassword} 
                onChange={handleChange} label='Confirm Password' required />
                <CustomButton type='Submit'>Sign up</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);