import React from 'react'
import ExerciseNavigator from './components/ExerciseNavigator'
import './styles/App.css'

export default function App() {

  return (
    <div className='app'>
        <h1> ✨React Practice Exercises✨</h1>
        <div>
          <ExerciseNavigator />
        </div>
    </div>
  )
}
