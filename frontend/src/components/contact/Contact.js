import React, { useState } from 'react'
import './Contact.css';
import { MdEmail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import axios from 'axios';


const Contact = ({url}) => {

    const [data, setData] = useState(
        {
            name: '',
            email: '',
            message: '',
        }
    )

    const onHandleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }


    const onHandleSubmit = async() => {

        if(data.email == "" || data.message == "" || data.name == "")
        {
            window.alert("Please fill all the fields");
            return;
        }
        const response = await axios.post(`${url}contact/connect`,data);

        console.log(response.data.success);

        if(response.data.success)
        {
            window.alert("e-mail sent successfully");
        }
        else
        {
            window.alert("Failed to send e-mail");
        }
        setData({
            name: '',
            email: '',
            message: '',
        })

    }


    return (
        <div className='contact' id='contact'>
            <h2>Get in touch</h2>
            <div className='contact-container'>


                <div className='contact-info'>
                    <h2 className='contact-heading'>Let's talk</h2>
                    <p className='contact-text'>Have a question or a project in mind? I'm always excited to discuss<br/> new opportunities and collaborations. Whether it's a quick chat or <br/>an in-depth conversation,feel free to reach out.<br/> Let's make something amazing together! </p>
                    <div className='contact-details'>
                    <MdEmail />
                        <p className='contact-mail-address'>srithin2003@gmail.com</p>
                    </div>
                    <div className='contact-details'>
                    <IoPhonePortraitOutline />
                        <p className='contact-phone-number'>+91 8590721355</p>
                    </div>
                    <div className='contact-details'>
                    <IoLocationSharp />

                        <p className='contact-location-address'> Bengaluru</p>
                    </div>

                </div>
                <div className='contact-form'>
                    <div className='contact-form-details'>
                        <p className='contact-form-name-label'> Your name</p>
                        <input value={data.name} onChange={onHandleChange} name='name' className='contact-form-name-input' type='text' placeholder='Name' />
                    </div>
                    <div className='contact-form-details'>
                        <p className='contact-form-email-label'>Your e-mail</p>
                        <input value={data.email} onChange={onHandleChange} name='email' className='contact-form-email-input' type='email' placeholder='Email' />
                    </div>
                    <div className='contact-form-details'>
                        <p className='contact-form-message-label'>Your message</p>
                        <textarea value={data.message} onChange={onHandleChange} name='message' className='contact-form-message-input' placeholder='Message' />
                    </div>

                    <button onClick={onHandleSubmit} className='contact-form-submit-button'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
