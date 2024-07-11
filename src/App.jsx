import React, { useState } from 'react'
import './styles/App.css'

export default function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <h2>useState() Exercise</h2>
      <div className="count">
        {count}
      </div>
      <div className="buttons-container">
        <p>Click buttons for do things.</p>
        <button onClick={()=> setCount(count + 1)}>Add 1</button>
        <button onClick={() => setCount(count + 2)}>Add 2</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  )
}
