import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert(`Passwords don't match.`);
            return;
        }

        try{
            const user = await auth.createUserWithEmailAndPassword(email,password);
            //if it's successful we want to reset user state
            await createUserProfileDocument(user, {displayName});

            //clear form
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch (err){
            console.error(err);
        }
    }

    handleChange = e => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span className="">Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput type='text' name='displayName' value={displayName} 
                    onChange={this.handleChange} label='Display Name' required />
                    <FormInput type='text' name='email' value={email} 
                    onChange={this.handleChange} label='Email' required />
                    <FormInput type='password' name='password' value={password} 
                    onChange={this.handleChange} label='Password' required />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} 
                    onChange={this.handleChange} label='Confirm Password' required />
                    <CustomButton type='Submit'>Sign up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;