import React from 'react'

const SignIn = () => {
    return (
        <div>
            <form id='signin-form'>
                <label for="firstname">First name: </label>
                <input type="text" name="firstname" />
                <br />
                <label for="lastname">Last name: </label>
                <input type="text" name="lastname" />
                <br />
                <label for="password">Password: </label>
                <input type="password" name="password" />
                <br />
                <label for="confirmpass">Confirm Password: </label>
                <input type="password" name="confirmpass" />
                <br />
                <button className='signin my-orange-btn' name="signin">Sign In</button>
                <br />
            </form>
        </div>
    )
}

export default SignIn