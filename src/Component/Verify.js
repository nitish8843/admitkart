import React from 'react'
import { useState } from 'react';
import OtpInput from 'react18-input-otp';
import './Verify.css';
import {Link} from 'react-router-dom'; 


export default function Verify() {
    const [otp, setOtp] = useState('');
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
      };
  return (
    <div className='verify'>
        <div className="img">
            <img src="undraw_confirmed_81ex.png" alt="Verify Number" />
        </div>

        <div className="content">
            <h3>Please verify Mobile number</h3>
            <h5>An OTP is sent to +917896781234</h5>

            <h6><a href="/#" style={{color:'#f7b348',textDecoration:'underline'}}>Change Phone Number</a></h6>
        </div>

        <div className="panel">
        <OtpInput value={otp} onChange={handleChange} numInputs={4} separator={<span>-</span>} />
        </div>
      
    

        <div className="verify-actions">
            <h5>Didn't Receive the code ? <a href="/#" style={{color:'#f7b348'}}>Resend</a></h5>
            <Link to='/welcome'>
            <button className='verify-button'>Verify</button>
            </Link>
        </div>
    </div>
  )
}
