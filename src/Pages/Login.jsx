import React from 'react'
import '../sass/Login.scss'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const navigate = useNavigate();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState([]);
    const [closeError, setCloseError] = useState(false)

    const handleCloseError = () => {
        setCloseError(!closeError)
    }
    const clearErrors = () => {
        setError([]);
    };

    const handlePost = () => {
        let payload = {
            username: username,
            password: password
        }
        console.log(payload)
        axios.post('https://787d-39-37-227-163.ngrok-free.app/api/login', payload)
            .then((res) => {
                console.log(res, 'res')
            })
            .catch((error) => {
                console.log(error)
            })
    };
    return (
        <div className='login-page'>
            <div className='login-box'>
                <div className='login-logo'>
                    <h4>Welcome back</h4>
                </div>
                <div className='card mt-20'>
                    {/* {
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
                    } */}
                    <div className='card-body'>
                        <input type='email' placeholder='Email address' name='username' value={username} className='email-input' onChange={(e) => setUserName(e.target.value)} />
                        <input type='password' placeholder='Password' name='password' value={password} className='email-input' onChange={(e) => setPassword(e.target.value)} />
                        <button className='btn btn-continue' onClick={handlePost}>Continue</button>
                        <div className='sign-para'>
                            <p>Don't have an account? <span><Link style={{ color: '#10A37F' }} to='/newaccount'>Sign up</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login