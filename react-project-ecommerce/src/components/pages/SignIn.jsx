import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

const SignIn = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);

    if (formSubmitted) {
        return (
            <Navigate to={"/"} />
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    }

    return (
        <div id='signin-form-container'>
            <h2>Sign in</h2>
            <form id='signin-form' onSubmit={handleSubmit}>
                <label htmlFor="firstname">Name* </label>
                <input type="text" name="firstname" placeholder='Enter your name' />
                <label htmlFor="password">Password* </label>
                <input type="password" name="password" placeholder='Enter your password' />
                <button className='signin-register-btn my-orange-btn mt-5' name="signin">Sign In</button>
            </form>

            <p className='text-center mt-5'>Do not have an account?
                <Link to={"/register"} style={{ textDecoration: 'none' }}>
                    <a> Sign up</a>
                </Link>
            </p>
        </div>
    )
}

export default SignIn