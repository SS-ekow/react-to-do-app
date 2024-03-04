import { useState } from 'react';

import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateFrom from './components/UpdateForm.jsx';
import ToDo from './components/ToDo.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';



function App() {

  //Tasks State
  const [toDo, setToDo] = useState([]); 


  // Temp State (note: use to write deleted logic)
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
const deleteTask = (id) => {
  let newTasks = toDo.filter(task => task.id !== id);
  setToDo(newTasks);


}


// mark as completed
const markDone = (id) => {

  let newTask = toDo.map(task => {
    if(task.id === id){
      return ({...task, completed: !task.completed})
    }
    return task;
  })
  setToDo(newTask);
};

//cancel update 
const cancelUpdate = () => {
  setUpdateData('');
};

// change task 
const changeTask = (e) => {
  let newEntry = {
    id: updateData.id,
    title: e.target.value,
    completed: updateData.completed ? true: false

  }
  setUpdateData(newEntry);
};

// update task
const updateTask = () => {
  let filtered = [...toDo].filter(task => task.id !== updateData.id);
  let updatedObject = [...filtered, updateData];
  setToDo(updatedObject);
  setUpdateData('');
};




  return (
    <div className="container App">
    <br/><br/>
    <h2>To Do List</h2>
    <br/><br/>
    
    {/* update task */}  

    {updateData && updateData.title ? (
    <UpdateFrom
    updateData = {updateData}
    changeTask = {changeTask}
     updateTask = {updateTask}
      cancelUpdate = {cancelUpdate}
    />
    ): 
    (
      <AddTaskForm
      newTask={newTask}
      setnewTask = {setnewTask}
      addTask = {addTask}
      
      />

    )}
    

 

    

    {/* display tasks */}

    {toDo && toDo.length ? '': 'No tasks...'}

    <ToDo
    toDo = {toDo}
    markDone = {markDone}
    setUpdateData = {setUpdateData}
    deleteTask = {deleteTask}
    
    />

    




    


      
    </div>
  );
}

export default App;
