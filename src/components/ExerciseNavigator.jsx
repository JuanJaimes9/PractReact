import React, { useState } from 'react'
import '../styles/exerciseNavigator.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Exercise1 from './exercises/exercise1/Exercise1'
import Exercise2 from './exercises/exercise2/Exercise2';
import Exercise3 from './exercises/exercise3/Exercise3'


const exercises = [<Exercise1/>, <Exercise2/>,<Exercise3/> ];

export default function ExerciseNavigator() {

    const [currentExercise, setCurrentExercise] = useState(0);

    const nextExercise = () => {
        setCurrentExercise((prev) => (prev + 1) % exercises.length);
    }

    const prevExercise = () => {
      setCurrentExercise((prev) => (prev - 1 + exercises.length) % exercises.length);
  }

  return (
    <div>
        {exercises[currentExercise]}

        <button className='next-exc-btn' onClick={nextExercise}><ArrowForwardIosIcon fontSize='large'/> </button>
        <button className='prev-exc-btn' onClick={prevExercise}><ArrowBackIosNewIcon fontSize='large'/></button>
    </div>
  )
}
