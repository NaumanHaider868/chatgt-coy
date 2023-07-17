import React from 'react'
import '../sass/Login.scss'
import { useNavigate } from 'react-router-dom'
function Number() {
    const navigate = useNavigate();
    const nextPage = () => {
        navigate('/content')
    }
    return (
        <div className='login-page'>
            <div className='login-box'>
                <div className='login-logo phone-number-div'>
                    <h4>Verify your phone number</h4>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-3'>
                                <input type='text' placeholder='Country' className='select-country' />
                            </div>
                            <div className='col-md-9'>
                                <input type='phone' placeholder='Phone' className='phone' />
                            </div>
                        </div>
                        <button className='btn btn-continue' onClick={nextPage}>Continue</button>
                        <div className='sign-para'>
                            <p>Don't have an account? <span>Sign up</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Number