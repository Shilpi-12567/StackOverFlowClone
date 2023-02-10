import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Auth.css';
import icon from '../assets/icon.png'
import AboutAuth from './AboutAuth';
import { signup, login } from '../action/auth'
const Auth = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleswitch = () => {
    setIsSignup(!isSignup)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!email && !password){
        alert('Enter email and password')
    }
    if(isSignup){
        if(!name){
            alert("Enter a name to continue")
        }
        dispatch(signup({ name, email, password }, navigate))
    }else{
        dispatch(login({ email, password }, navigate))
    }
}
  return (
    <section className='auth-section'>
      {isSignup && (<AboutAuth />)}
      <div className='auth-container-2'>
        {!isSignup && <img src={icon} alt='stack overflow' className='login-logo' />}
    
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <label htmlFor='name'>
            <h4>Display Name</h4>
            <input type='name' id='name' onChange={(e) => {setName(e.target.value)}}/>
          </label>
        )  }
        <label htmlFor='email'>
          <h4>Emails</h4>
          <input type="Email" name='email' id='email' onChange={(e) => {setEmail(e.target.value)}} />
        </label>
        <label htmlFor='password'>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4>password</h4>
            {!isSignup && 
              <p style={{ color: "#007ac6" }}>Forget Password ?</p> }
          </div>
          <input type="password" name='password' id='password' onChange={(e) => {setPassword(e.target.value)}} />
          {isSignup && <p style={{ fontsize: "13px" }}>Passwords must contain at least 
          eight characters, <br />including at least 1 letter and 1 number.</p>}
        </label>
        {isSignup && (
          <label htmlFor='check'>
            <input type='checkbox' id='check' className='checkbox' style={{maxWidth:"20px",maxHeight:"20px" ,marginBottom:"1px"}} />
            <p style={{ fontsize: "13px" }}>Opt-in to receive occasional product 
            updates,<br /> user research invitations,<br /> company announcements,
              and digests</p>
          </label>
        )}
        <button type='submit' className='auth-btn'>{isSignup ? 'Sign up' : 'Log in'}</button>
        {isSignup && (
          <p style={{ color: "#666767", fontsize: "13px" }}>By clicking “Sign up”, you agree to
            <span style={{ color: "#007ac6" }}> our terms ,<br />of service </span>
            <span style={{ color: "#007ac6" }}> privacy policy</span> and
            <span style={{ color: "#007ac6" }}>cookie policy</span> </p>
        )}
        <p>{isSignup ? 'Already have  an account?' : "Don't have  an Account"}</p>
        <button type='button' className='handle-switch-btn' onClick={handleswitch}>{isSignup ? "Log in" : 'Sign up'}</button>
      </form>
      </div>
    </section>
  )
}

export default Auth