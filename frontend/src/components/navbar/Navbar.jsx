import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className='logo'>
                <h1 style={{fontSize:"40px"}}>Srithin A V</h1>
            </div>
           
            <div className='menus'>
                
                <div className='menu-items'>
            
                    <Link to="home" smooth={true} duration={600}><p>Home</p></Link>
                    <Link to="about" smooth={true} duration={600}><p>About me</p></Link>
                    <Link to="services" smooth={true} duration={600}><p>Services</p></Link>
                    <Link to="contact" smooth={true} duration={600}><p>Contact</p></Link>
                </div>
            </div>
            
            <div className='connect-with-me'>
               <Link to= "contact"smooth={true} duration={600}><button>Connect with me</button></Link> 
                
            </div>
        </div>
    );
}

export default Navbar;
