import React from 'react'
import '../sass/Login.scss'

function NewAccount() {
    return (
        <div className='login-page'>
            <div className='login-box'>
                <div className='login-logo'>
                    <h4>Create your account</h4>
                    <p>Note that phone verification may be required for signup. Your number will only be used to verify your identity for security purposes.</p>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <input type='email' placeholder='Email address' className='email-input' />
                        <input type='password' placeholder='Password' className='email-input' />
                        <button className='btn btn-continue'>Continue</button>
                        <div className='sign-para'>
                            <p>Don't have an account? <span>Log in</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewAccount