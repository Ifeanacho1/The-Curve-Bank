import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
      <header className='Header'>
        <div className='HeaderLeft'>
            <img src="https://www.the-curve.africa/assets/curve1-a21fb9d4.png" alt="" className='HeaderLeftImg'/>
            <h1 className='HeaderLeftH1'>Bank</h1>
        </div>
        <div className='HeaderRight'>
            <h1 className='HeaderRightH1'>Ifeanacho Francis</h1>
            <button className='HeaderRightBtn'>Logout</button>
        </div>
      </header>
    </>
  )
}

export default Header
