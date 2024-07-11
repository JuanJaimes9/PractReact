import React, { useState } from 'react'
import '../../../styles/exercise1.css'

export default function Exercise1() {

    const [count, setCount] = useState(0)

  return (
    <div>
        <h2>useState() Exercise</h2>
        <div className="count">
        {count}
        </div>
        <div className="buttons-container">
            <p>Click buttons for do things.</p>
            <button className="btn add" onClick={()=> setCount(count + 1)}>Add 1</button>
            <button className="btn add" onClick={() => setCount(count + 2)}>Add 2</button>
            <button className="btn reset" onClick={() => setCount(0)}>Reset</button>
        </div>
    </div>
  )
}
