import React, { useState } from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './exercise3.css';

export default function Exercise3() {
  
  const [task, setTask] = useState(''); //Almacena la tarea 
  const [tasks, setTasks] = useState([]); //Almacena un array de tareas
  const [completedTasks, setCompletedTasks] = useState({}); //Añmacena un objeto que indica las tareas completas


  //Se llama cuando se envía el formulario para agregar una tarea
  function addTask(e) {

    e.preventDefault(); //previene que el form recargue la página al enviarse

    if (task.trim()) { //verifica que 'task' no esté vacío (trim elimina los espacios en blanco)
      
      setTasks([...tasks, task]); //crea una nueva lista de tareas añadiendo la nueva a las ya existentes
      
      setTask(''); //limpia el input
    }
  }

  function handleInputChange(e) {
    setTask(e.target.value); //Actualiza el estado de "task" con el valor del input
  }

  function deleteTask(index) {

    setTasks(tasks.filter((_, i) => i !== index)); //Filtra las tareas y elimina la que tiene el índice especificado
    
    const newCompletedTasks = { ...completedTasks }; //Crea una copia del objeto de tareas completadas

    delete newCompletedTasks[index];// Elimina la tarea completada correspondiente al índice especificado

    setCompletedTasks(newCompletedTasks); // Actualiza el estado 'completedTasks' con las tareas completadas actualizadas

  }

  function taskCompleted(index) {  // Función para marcar una tarea como completada o no completada
    setCompletedTasks({  // Actualiza el estado 'completedTasks'
      ...completedTasks,  // Mantiene las tareas completadas existentes
      [index]: !completedTasks[index],  // Cambia el estado de completado de la tarea correspondiente al índice especificado
    });
  }

  return (
    <div className='app-container'>
      <h2>Task List</h2>
      <form onSubmit={addTask}>
        <input placeholder='write your task' value={task} onChange={handleInputChange} />
        <button type="submit">Add task</button>
      </form>
      <div className="task-list">
        {tasks.map((task, index) => ( /* Mapea sobre todas las tareas y las muestra */
          <div className={completedTasks[index] ? 'task-item complete' : 'task-item'} key={index}>
            {task}
            <div>
              <RemoveCircleOutlineIcon className='delete' onClick={() => deleteTask(index)} />
              <CheckCircleOutlineIcon className='completed' onClick={() => taskCompleted(index)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
