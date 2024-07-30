import React from 'react'
import './About.css'
import srithinimg from '../../assets/headerImg.jpeg'


const About = () => {
  return (
    <div className='about' id='about'>
        <h1>About Me</h1>
        <div className='about-container'>
            <img src={srithinimg} alt="this is img" />
            <div className='about-content'>
                <p className='about-content-text1'>
Hi, I’m Srithin! With a background in BCA and a passion for web development, <br />I specialize in creating full stack applications using the MERN stack. <br />
I love tackling complex problems and turning ideas into functional, user-friendly solutions. <br />
I enjoy exploring the latest tech trends and working on personal projects to sharpen my skills. <br /> Let’s connect and build something great together!
                </p>
                <div className='rating-container'>
                    <div className='rating'>
                        <p>Html & Css</p>
                        <hr style={{width: "60%"}} />
                    </div>
                    <div className='rating'><p> Reactjs</p>
                        <hr style={{width: "90%"}} /></div>
                    <div className='rating'><p>Nodejs</p>
                        <hr style={{width: "60%"}} /></div>
                    <div className='rating'><p>Express</p>
                        <hr style={{width: "70%"}} /></div>
                        <div className='rating'><p>Mongodb</p>
                        <hr style={{width: "50%"}} /></div>    
                </div>

            </div>
        </div>

        <div className='about-footer'>
            <div className='acheivements'>
                <p className='experience'></p>
                <p className='projects'></p>
                <p className='clients'></p>
            </div>
        </div>
      
    </div>
  )
}

export default About
