import React from 'react'
import cx from 'classnames'

const SignInForm = (props) => <form className={cx('signin-form', {'active': props.active})}>
    <label htmlFor="user_name">User Name</label>
    <input type="text" id="user_name"/>

    <label htmlFor="password">Password</label>
    <input type="password" id="password"/>

    <button>Sign In</button>
</form>

export default SignInForm
