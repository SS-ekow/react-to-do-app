import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {faPlus} from '@fortawesome/free-solid-svg-icons';


const AddTaskForm = ({newTask, setnewTask, addTask}) => {
    return (
        <>
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
        
        </>

    )
}

export default AddTaskForm;