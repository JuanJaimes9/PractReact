import React, { useState } from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import './exercise3.css';

export default function Exercise3() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState({});

  function addTask(e) {
    e.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  }

  function handleInputChange(e) {
    setTask(e.target.value);
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
    const newCompletedTasks = { ...completedTasks };
    delete newCompletedTasks[index];
    setCompletedTasks(newCompletedTasks);
  }

  function taskCompleted(index) {
    setCompletedTasks({
      ...completedTasks,
      [index]: !completedTasks[index],
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
        {tasks.map((task, index) => (
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
