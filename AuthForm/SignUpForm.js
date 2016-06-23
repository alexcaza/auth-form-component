import React from 'react'
import cx from 'classnames'

const SignUpForm = (props) => <form className={cx('signup-form', {'active': props.active})}>

    <label htmlFor="user_name">User Name</label>
    <input type="text" id="user_name"/>

    <label htmlFor="email">E-Mail</label>
    <input type="email" id="email"/>

    <label htmlFor="password">Password</label>
    <input type="password" id="password"/>

    <button>Sign Up</button>
</form>

export default SignUpForm
