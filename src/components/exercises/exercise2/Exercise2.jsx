import React, { useEffect, useState } from 'react'
import '../../../styles/exercise2.css'

export default function Exercise2() {

      const [time, setTime] = useState(0)

      useEffect(() => {
        const timer = setTimeout (() => {
          const counter = time + 1;
          setTime(counter);
        }, 1000);
        return () => clearTimeout(timer)
      }, [time])
    
  return (
    <div className='app-container'>
      <h2>Timer</h2>
      <div className="timer">
        {time} 
      </div>
      <div className='buttons-container'>
      <button className='btn reset' onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  )
}
