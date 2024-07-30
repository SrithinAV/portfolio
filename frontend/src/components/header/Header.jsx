import React from 'react'
import './Header.css'
import srithin from '../../assets/srithincrop.png'



const Header = () => {
  return (
    <div className='header' id='header' name = 'header'>
        <img src={srithin} alt="" />
        <h1> <span className='name'>I'm Srithin A V</span>, Full stack developer based in India</h1>
        <p>Hey there! I’m Srithin, a full stack developer with a knack for building smooth and dynamic web applications. <br />From front-end design to back-end development, I enjoy bringing ideas to life using the MERN stack. <br /> Check out my projects to see how I combine clean code with user-friendly designs to create engaging digital experiences</p>

      
    </div>
  )
}

export default Header
