import React from 'react'
import './Welcome.css'; 
 const Welcome = () => {

  return (
    <div class='success'>
        <div className="img">
            <img src="Artboard1.png" alt="Success Image" />
        </div>
        <div className="details">
            <h2>Welcome to AdmitKard</h2>
            <p class='one'>In order to provide you with a custom experience.</p>
            <p>we need to ask you a few questions.</p>
        </div>

        <div className="actions">
            <button>Get Started</button>
            <h5>* This will only take 5 min</h5>
        </div>
    </div>
  )
}
export default Welcome