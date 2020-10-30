import React from 'react';
import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState = ({email: '', password: ''})
        }catch(err){
            console.log(err);
        }
    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className="sign-in">
                <h2 className="">I'm already have an account</h2>
                <span className="">Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} required
                    handleChange={this.handleChange} label='email'/>
                    <FormInput name='password' type='password' value={this.state.password} required
                    handleChange={this.handleChange} label='`password'/>
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{''} Sign In with Google {''}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
