import React, { useEffect, useState } from 'react'
import './exercise2.css'

export default function Exercise2() {
  
      //Timer starts in 0
      const [time, setTime] = useState(0);

      //Timer is not active until we click on the start button
      const [isActive, setIsActive] = useState(false);

      useEffect(() => {
      //When "isActive" is true, the timer will start   
        if(isActive){ 
        const timer = setTimeout (() => {
          const counter = time + 1;
          setTime(counter);
        }, 1000);
        return () => clearTimeout(timer)
        }
      }, [isActive, time])
    
  return (
    <div className='app-container'>
      <h2>Timer</h2>
      <div className="timer">
        {time} 
      </div>
      <div className='buttons-container'>
      <button className='btn add' onClick={() => setIsActive(true)}>Start</button>
      <button className='btn pause' onClick={() => setIsActive(false)}>Pause</button>
      <button className='btn reset' onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  )
}
