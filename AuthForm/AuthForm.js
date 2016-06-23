import React from 'react'
import cx from 'classnames'
import './styles.scss'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

class AuthForm extends React.Component {
    constructor() {
        super()
        this.state = {
            signUp: true,
            signIn: false
        }

        this.setSignIn = this.setSignIn.bind(this);
        this.setSignUp = this.setSignUp.bind(this);
    }


    setSignIn() {
        this.setState({ signUp: false });
        this.setState({ signIn: true });
    }

    setSignUp() {
        this.setState({ signUp: true });
        this.setState({ signIn: false });
    }

    render() {
        const { signUp, signIn } = this.state
        return (
            <div>
            <div className="auth-form">
                <nav>
                    <button className={
                            cx("form-action", { 'active': signUp })
                        }
                        onClick={() => this.setSignUp()}>Sign Up</button>
                    <button className={
                            cx("form-action", { 'active': signIn })
                        }
                        onClick={() => this.setSignIn()}>Sign In</button>
                </nav>
                <SignUpForm active={this.state.signUp}/>
                <SignInForm active={this.state.signIn}/>
            </div>
            <p className="credit">Background image from <a href="https://unsplash.com/photos/iE9k36TlRmI">Unsplash</a></p>
            </div>
        )
    }
}

export default AuthForm
