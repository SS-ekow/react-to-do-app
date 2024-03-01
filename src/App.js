import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faPlus, faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons';

import './App.css';



function App() {

  //Tasks State
  const [toDo, setToDo] = useState([
    {id: 1, task: "Task 1", completed: false},
    {id: 2, task: "Task 2", completed: false}
    
  ]); 

  // Temp State
  const [newTask, setnewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

// Add Task
const addTask = () => {};



// Delete Task
const deleteTask = (id) => {};  


// mark as completed
const markDone = (id) => {};

//cancel update 
const cancelUpdate = () => {};

// change task 
const changeTask = (e) => {};

// update task
const updateTask = () => {};




  return (
    <div className="container App">
    <br/><br/>
    <h2>To Do List App</h2>
    <br/><br/>

    {/* display tasks */}

    


      
    </div>
  );
}

export default App;
