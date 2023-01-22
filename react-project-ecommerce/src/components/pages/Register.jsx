import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

const Register = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);

    if (formSubmitted) {
        return (
            <Navigate to={"/login"} />
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
    }

    return (
        <div>
            <div id='signin-form-container'>
                <h2>Sign up</h2>
                <form id='signin-form' onSubmit={handleSubmit}>
                    <label for="firstname">Name* </label>
                    <input type="text" name="firstname" placeholder='Enter your name' />
                    <label for="firstname">Email* </label>
                    <input type="text" name="firstname" placeholder='Enter your email' />
                    <label for="password">Password* </label>
                    <input type="password" name="password" placeholder='Create a password' />
                    <p className='mb-5'>Must be at least 8 characters.</p>
                    <button className='signin-register-btn my-orange-btn' name="signin">Sign up</button>
                </form>

                <p className='text-center mt-5'>Already have an account?
                    <Link to={"/login"} style={{ textDecoration: 'none' }}>
                        <a> Log in</a>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register