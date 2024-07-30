import React from 'react'
import './Services.css'
import ServiceList from '../../assets/ServiceArray.jsx'


const Services = () => {
  return (
    <div className='services-container' id='services'>
      <h1>Services</h1>
    <div className='services'>
      {ServiceList.map((services, index)=>{
        return <div className='services-card'>

            <p className='services-no'>{services.s_no}</p>
            <h3 className='services-card-title'>{services.s_name}</h3>
            <p style={{ maxWidth: '350px' }}>{services.s_desc}</p> 
          </div>
      })}
      
    </div>
    </div>
  )
}

export default Services
