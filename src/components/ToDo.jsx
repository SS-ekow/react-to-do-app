import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import { faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons';

const ToDo = ({toDo, markDone, setUpdateData, deleteTask}) => {
    return (
        <>
            {toDo && toDo.sort((a,b)=> a.id > b.id ? 1: -1).map((task, index)=>{
            return (

                <div className="container-fluid todo-box">
                    <React.Fragment key = {task.id}>
                        <div className = "col taskBg">
                            <div className={task.completed ? 'done': ''}>
                                <span className='taskNumber'>{index + 1}</span>
                                <span className='taskText'>{task.title}</span>
                
                            </div>
                            <div className="iconsWrap">
                                <span title='completed/ not completed'
                                onClick = {()=> markDone(task.id)}

                                >
                                <FontAwesomeIcon icon={faCircleCheck} onClick={()=>markDone(task.id)} />
                                </span>
                
                                {task.completed ? null : (
                                <span title="edit"
                                onClick={()=> setUpdateData(
                                    {id: task.id,
                                    title: task.title,
                                    completed: task.completed ? true: false}
                                )}
                                >
                                <FontAwesomeIcon icon={faPen} />
                                </span>
                                )}

                                <span title='Delete'
                                onClick = {()=> deleteTask(task.id)}
                                >
                                <FontAwesomeIcon icon={faTrashCan} onClick={()=>deleteTask(task.id)}/>
                                </span>
                                    
                            </div>
                        </div>
                
                    </React.Fragment>

                </div>
              
            )
          })
      
        }

        
        </>

        
    )
}

export default ToDo;