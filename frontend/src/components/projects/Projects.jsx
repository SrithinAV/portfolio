import React from 'react'
import './Projects.css'
import WorkList from '../../assets/WorkArray.jsx'
import { Link } from 'react-router-dom'





const Projects = () => {
 
  const onHandClick = (work)=>
  {
      // window.location.href = work.w_link;
      window.open(work.w_link);
  }

  return (
    <div className='work-container' id = 'works'>
      <h1>Works</h1>
        
      <div className='works'>
        {WorkList.map((work,index)=>
        {
          return <div className='work-card' id = {index}>
            
            
                <img onClick={()=>onHandClick(work)} src={work.w_img}  alt={work.w_name} />
             
            
            </div>
        })}
      </div>
    </div>
  )
}

export default Projects
