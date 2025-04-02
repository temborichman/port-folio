import React from 'react'

const Info = () => {
  return (
    <div className='about-info grid'>
        <div className='about-box'>
        <i class="fa-solid fa-award"></i>
            <h3 className='about-title'>Experience</h3>
            <span className='about-subtitle'>7 months working</span>
    </div>

    <div className='about-box'>
    <i class="fa-solid fa-briefcase"></i>
    <h3 className='about-title'>Completed</h3>
    <span className='about-subtitle'>10 + Projects</span> 
    </div> 

     <div className='about-box'>
     <i class="fa-solid fa-headset"></i>
    <h3 className='about-title'>Support</h3>
    <span className='about-subtitle'>Online 24/7</span> 
    </div> 
    </div>   
  )
}

export default Info
