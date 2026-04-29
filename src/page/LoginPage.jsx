import React from 'react'
import './LoginPage.css'

const LoginPage = () => {
  return (
    <>
      <main className='LoginMain'>
        <div className='LoginMainDiv'>
            <img src="https://www.the-curve.africa/assets/curve1-a21fb9d4.png" alt="" className='LoginMainImg'/>
            <h1 className='LoginMainDivH1'>The Curve Bank</h1>
            <input type="email" placeholder=' Username' className='LoginMainDivInput'/>
            <input type="password" placeholder=' Password' className='LoginMainDivInput'/>
            <button className='LoginMainDivBtn'>Log In</button>
            <h2 className='LoginMainDivH2'>Forgotten password</h2>
            <button className='LoginMainDivBtn2'>Sign Up</button>
        </div>
      </main>
    </>
  )
}

export default LoginPage
