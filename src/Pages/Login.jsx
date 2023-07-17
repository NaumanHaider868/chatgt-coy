import React from 'react'
import '../sass/Login.scss'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login-page'>
            <div className='login-box'>
                <div className='login-logo'>
                    <h4>Welcome back</h4>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <input type='email' placeholder='Email address' className='email-input' />
                        <button className='btn btn-continue'>Continue</button>
                        <div className='sign-para'>
                            <p>Don't have an account? <span><Link style={{color:'#10A37F'}} to='/newaccount'>Sign up</Link></span></p>
                        </div>

                        {/* <div className='card-body-bottom'>
                            <div className='option'>
                                <div className='hr-left'></div>
                                <p>OR</p>
                                <div className='hr-right'></div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login