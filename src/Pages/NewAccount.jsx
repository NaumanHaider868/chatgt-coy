import React from 'react'
import '../sass/Login.scss'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function NewAccount() {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();
    const [phone, setPhone] = useState();
    const [confirmPassword,setConfirmPassword] = useState()
    const navigate = useNavigate();
  
    let payload = {
        email: email,
        password: password,
    }
    const handelSignUp = (e) => {
        e.preventDefault();
        axios.post('https://787d-39-37-227-163.ngrok-free.app/api/signup', payload)
            .then((resp) => {
                console.log(resp)
                // navigate('/content')
            })
    }
    return (
        <div className='login-page overflow-y-auto'>
            <div className='login-box'>
                <div className='login-logo'>
                    <h4>Create your account</h4>
                    <p>Note that phone verification may be required for signup. Your number will only be used to verify your identity for security purposes.</p>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <input type='email' placeholder='Email address' className='email-input' onChange={(e) => setEmail(e.target.value)} />
                        <input type='password' placeholder='Password' className='email-input' onChange={(e) => setPassword(e.target.value)} />
                        <button className='btn btn-continue' onClick={handelSignUp}>Continue</button>
                        <div className='sign-para'>
                            <p>Already have an account? <span><Link style={{ color: '#10A37F' }} to='/'>Log in</Link></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default NewAccount