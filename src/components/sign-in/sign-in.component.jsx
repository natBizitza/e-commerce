import React from 'react';
import { connect } from 'react-redux';
import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

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
        const { emailSignInStart } = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);
    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState({[name]: value})
    }

    render(){
        const { googleSignInStart } = this.props;
        return(
            <div className="sign-in">
                <h2 className="">I'm already have an account</h2>
                <span className="">Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} required
                    handleChange={this.handleChange} label='email'/>
                    <FormInput name='password' type='password' value={this.state.password} required
                    handleChange={this.handleChange} label='password'/>
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>{''} Sign In with Google {''}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email,password}))
})
export default connect(null, mapDispatchToProps)(SignIn);
