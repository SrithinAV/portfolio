import React, { useState, useEffect } from 'react';

import './Chat.css';
import { BsWechat } from "react-icons/bs";
import { PiArrowArcLeftThin } from "react-icons/pi";

// import axios from 'axios';


const Chat = ({showInterface, setShowInterface}) => {
  
  const [showPopup, setShowPopup] = useState(false);



  useEffect(() => {
    // Show the popup after a delay (e.g., 3 seconds)
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(!showPopup);
    setShowInterface(!showInterface);
  };

  return (
    <div className='chat'>
      <BsWechat className='chat-icon' onClick={handleClosePopup} />

      {/* Show the popup if showPopup is true */}
      {showPopup && (
        <div className="chat-container">
            <PiArrowArcLeftThin className='arrow-icon'/>
        <div className="chat-popup">
            
          <div className="popup-content">
            <p>Click here to chat with me</p>
           
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
