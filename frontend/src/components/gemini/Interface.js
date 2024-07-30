import React, { useEffect, useState, useRef } from 'react';
import './Interface.css';
import { IoMdSend } from "react-icons/io";
import { PiInfinityLight } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";
import axios from 'axios';

const InterfaceGemini = ({ showInterface, setShowInterface, url }) => {
  const msgRef = useRef(null);
  const interfaceContainerRef = useRef(null);

  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hey I'm Srithin :)",
      isBot: true,
    }
  ]);

  const onHandleSend = async (value) => {
    const text = value;
    setValue('');
    const res = await axios.post(`${url}gemini/prompt`, { prompt: text });
    setMessages([
      ...messages,
      { text: value, isBot: false },
      { text: res.data.text, isBot: true }
    ]);
  };

  useEffect(() => {
    msgRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleClickOutside = (event) => {
    if (interfaceContainerRef.current && !interfaceContainerRef.current.contains(event.target)) {
      setShowInterface(false);
    }
  };

  useEffect(() => {
    if (showInterface) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showInterface]);

  return (
    <div className='interface' id='interface'>
      {showInterface && (
        <div className='interface-container' ref={interfaceContainerRef}>
          <div className='interface-content'>
            <div className='interface-messages-scroll'>
              {messages.map((message, index) =>
                <div key={index} className='interface-messages'>
                  {message.isBot ?
                    <div className='message-srithin'>
                      <PiInfinityLight style={{ fontSize: "30px", width: "70px", color: "purple" }} />
                      <p>{message.text}</p>
                    </div> :
                    <div className='message-user'>
                      <p>{message.text}</p>
                      <CiFaceSmile style={{ fontSize: "26px", width: "60px" }} />
                    </div>}
                  <div ref={msgRef} />
                </div>
              )}
            </div>
            <div className='interface-input'>
              <input
                type='text'
                placeholder='send a message'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(e) => { if (e.key === 'Enter') onHandleSend(value); }}
              />
              <IoMdSend className='send-icon' onClick={() => onHandleSend(value)} style={{ fontSize: '30px' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterfaceGemini;
