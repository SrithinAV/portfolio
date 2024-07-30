import React from 'react'

const Connect = () => {
  return (
    <div className='connect' id='connect'>
      '
    <div className='connect-container'>
      
      <h1 className='connect-heading'>Connect</h1>

      <div className='connect-name'>
        <p className='connect-details'>Name</p>
        <input className='connect-input' type='text' />
      </div>
      <div className='connect-email'>
        <p className='connect-details'>Email</p>
        <input className='connect-input' type='email' />
      </div>

       <div className='connect-message'>
        <p className='connect-details'>Message</p>
        <textarea className='connect-input' type='text' />
        </div> 
    </div>
    </div>
  )
}

export default Connect
