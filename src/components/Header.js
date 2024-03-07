import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>
      <div className='upper' style={{margin: "10px"}}>
        <h1 style={{color: "red"}}>Family Wellness</h1>
        <p>MESSAGE THERAPY </p>
      </div>
      <nav className='navbar' style={{margin: " 0px 10px"}}>
        <ul  className='lists' style={{ display: "flex", justifyContent: 'space-around', alignItems: "center", backgroundColor: "gray"}} >
            <p style={{backgroundColor: "red" , padding: "0px 50px"}}>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>FAQ</p>
            <p>Contact</p>
        </ul>
      </nav>
    </>
  )
}

export default Header
