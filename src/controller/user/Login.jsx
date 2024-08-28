import React from 'react'
import { Button } from '@mui/material'
import "./loginSignup.css"


export default function Login() {
  return (
    <div>
      <div className="login">
        <h2>Login to Ascent</h2>
        <form className='form'>
            <div className='m1'>
                <label>Email Id</label>
                <input 
                    id='email'
                    type='email'
                    placeholder='Enter your email'
                />
            </div>
            <div className='m1'>
                <label>Password</label>
                <input 
                    id='password'
                    type='password'
                    placeholder='Enter your password'
                />
            </div>
            <Button variant="contained" color="success">LogIn</Button>

        </form>
      </div>
    </div>
  )
}
