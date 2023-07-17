import React from 'react'
import '../sass/Login.scss'
import { useNavigate } from 'react-router-dom'
function TellUs() {
    const navigate = useNavigate();
    const nextPage = () => {
        navigate('/number')
    }
    return (
        <div className='login-page'>
            <div className='login-box'>
                <div className='login-logo'>
                    <h4>Tell us about you</h4>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <input placeholder='First Name' className='half-input' />
                                    </div>
                                    <div className='col-md-6'>
                                        <input placeholder='Last Name' className='half-input' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <input placeholder='Password' className='email-input' />
                            </div>
                        </div>
                        {/* <input type='email' placeholder='Email address' className='email-input' />
                        <input type='password' placeholder='Password' className='email-input' /> */}
                        <button className='btn btn-continue' onClick={nextPage}>Continue</button>
                        <div className='sign-para'>
                            <p>By clicking "continue", you agree to our <span>Terms</span> and condition our <span>privacy policy</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TellUs