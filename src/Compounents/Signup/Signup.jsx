import React from 'react'
import './Signup.css'
import signup from '../../assets/login.svg'
const Signup = () => {
  return (
    <div className='Signup'>
      <div className="Form">
        <h1>Sign Up</h1>
        <p>Already have account? <a href="">Login here</a></p>
        <div className="inputs">
          <div className="name">Name <input type="text" placeholder='Enter your name here' /></div>
          <div className="email">Email id <input type="email" placeholder='Enter your email id here' /></div>
          <div className="password">Password <input type="password" placeholder='Enter your password here' /></div>
        </div>
      <div className="ch">
      <input type="checkbox" />
      <p>By Signing up you agree to recieve updates and speacial Offers.</p>
      </div>

       <div className="btn">
       <button>Submit</button>
       </div>
      </div>
      <div className="img">
        <img src={signup} alt="" />
      </div>
    </div>
  )
}

export default Signup