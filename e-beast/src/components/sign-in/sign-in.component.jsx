import React from 'react';
import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState = ({email: '', password: ''})
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

                    <CustomButton type='submit'> Sign In </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
