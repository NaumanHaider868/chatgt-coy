import React from 'react'
import '../sass/Login.scss'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);
    const [closeError,setCloseError] = useState(false)

    let payload = {
        email: email,
        password: password
    }
    const handleCloseError = () => {
        setCloseError(!closeError)
    }
    const clearErrors = () => {
        setError([]);
      };
    const handelLogin = () => {
        setCloseError(false)
        axios.post('https://foodapis.techenablers.info/api/login', payload)
            .then((res) => {
                console.log(res.data.data.token);
                navigate('/content');
                localStorage.setItem('token', res.data.data.token)
            })
            .catch((error) => {
                setError(error.response.data.errors, 'error');
                setTimeout(clearErrors, 3000);
            })
    }
    return (
        <div className='login-page'>
            <div className='login-box'>
                <div className='login-logo'>
                    <h4>Welcome back</h4>
                </div>
                <div className='card mt-20'>
                    {
                        error.length > 0 && error.map((e, i) => {
                            return (
                                <React.Fragment>
                                    <div className={` ${closeError ? 'hiddenError': 'error'}`}>
                                        <div className='error-div'>
                                            <div className='msg'>
                                                <p>{e}</p>
                                            </div>
                                            <div className='close-icon' onClick={handleCloseError}></div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                    }
                    <div className='card-body'>
                        <input type='email' placeholder='Email address' name='email' className='email-input' onChange={(e) => setEmail(e.target.value)} />
                        <input type='password' placeholder='Password' name='password' className='email-input' onChange={(e) => setPassword(e.target.value)} />
                        <button className='btn btn-continue' onClick={handelLogin}>Continue</button>
                        <div className='sign-para'>
                            <p>Don't have an account? <span><Link style={{ color: '#10A37F' }} to='/newaccount'>Sign up</Link></span></p>
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