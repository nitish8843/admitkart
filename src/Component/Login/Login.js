import React, { useState } from 'react';
import './Login.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import {Link} from 'react-router-dom'; 


export default function Login() {
  const [input,setInput] = useState("");
  // const handleChange=(value,data)=>{

  // }

  return (
    <div className='login'>
      <div className="login-img">
        <img src="AK_logo.png" alt="AdmitKard" />
      </div>

      <div className="welcome">
        <h1 style={{ fontWeight: '400' }}>Welcome Back</h1>
        <p>Please sign in to your account</p>
      </div>

      <div className="number-panel">
        <PhoneInput style={{border:'none'}}
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true,
            border:false
          }}
          country="in"
          value={input}
          onChange={(value)=>setInput(value)}
        />
      </div>

      <div className="title">
        <h6>We will send you a one time SMS message.Charges may apply.</h6>
      </div>

      <div className="login-action">
        <Link to='/verify'>
        <button>Sign in with OTP</button>
        </Link>
      </div>
    </div>
  )
}
