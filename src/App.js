import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faPlus, faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons';

import './App.css';



function App() {

  //Tasks State
  const [toDo, setToDo] = useState([
    {id: 1, title: "Task 1", completed: false},
    {id: 2, title: "Task 2", completed: false}
    
  ]); 

  // Temp State
  const [newTask, setnewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

// Add Task
const addTask = () => {
  if(newTask) {
    let num = toDo.length + 1;
    let newEntry = {id: num, title: newTask, completed: false}

    setToDo([...toDo, newEntry]);
    setnewTask('');

  }
};



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
    
    {/* update task */}
    <div className="row">
      <div className="col">
        <input type="text" className="form-control form-control-lg" />

      </div>
      <div className="col-auto">
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faPen} />
          Update 
        </button>
        <button className="btn btn-danger" onClick={cancelUpdate}>
          Cancel
        </button>
      </div>
    </div>
    <br />



    {/* Add task */}
    <div className="row">
      <div className="col">
        <input 
        value = {newTask}
        onChange={(e)=>setnewTask(e.target.value)}
        type="text" className="form-control form-control-lg" />
      </div>
      <div className="col-auto">
        <button 
        onClick ={addTask}
        className="btn btn-lg btn-success">
          <FontAwesomeIcon icon={faPlus} />
          Add Task

        </button>
      </div>
    </div>
    <br />

    {/* display tasks */}

    {toDo && toDo.length ? '': 'No tasks...'}

    {toDo && toDo.map((task, index)=>{
      return (
        <React.Fragment key = {task.id}>
          <div className = "col taskBg">
            <div className={task.completed ? 'done': ''}>
              <span className='taskNumber'>{index + 1}</span>
              <span className='taskText'>{task.title}</span>

            </div>
            <div className="iconsWrap">
              <span title='completed/ not completed'>
                <FontAwesomeIcon icon={faCircleCheck} onClick={()=>markDone(task.id)} />
              </span>
              <span title="edit">
                <FontAwesomeIcon icon={faPen} onClick={()=>changeTask(task.id)}/>
              </span>
              <span title='Delete'>
                <FontAwesomeIcon icon={faTrashCan} onClick={()=>deleteTask(task.id)}/>
              </span>

            </div>
          </div>
        
        </React.Fragment>
      )
    })

    }




    


      
    </div>
  );
}

export default App;
