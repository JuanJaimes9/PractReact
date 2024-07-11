import React, { useState } from 'react'
import '../styles/exerciseNavigator.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Exercise1 from './exercises/exercise1/Exercise1'


const exercises = [<Exercise1/>];

export default function ExerciseNavigator() {

    const [currentExercise, setCurrentExercise] = useState(0);

    const nextExercise = () => {
        setCurrentExercise((prev) => (prev + 1) % exercises.length);
    }

  return (
    <div>
        {exercises[currentExercise]}

        <button className='next-exc-btn' onClick={nextExercise}><ArrowForwardIosIcon fontSize='large'/> </button>

    </div>
  )
}
