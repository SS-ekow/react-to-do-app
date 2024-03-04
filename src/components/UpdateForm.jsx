import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'; 
import {  faPen} from '@fortawesome/free-solid-svg-icons';


const UpdateForm = ({updateData, changeTask, updateTask, cancelUpdate}) => {
    return (
    <>
      <div className="row">
        <div className="col">
          <input
          value = {updateData && updateData.title}
          onChange={(e)=> changeTask(e)}
          className="form-control form-control-lg" />

        </div>
        <div className="col-auto">
          <button className="btn btn-success"
          onClick= {updateTask}
          >
            <FontAwesomeIcon icon={faPen} />
            Update 
          </button>
          <button className="btn btn-danger" onClick={cancelUpdate}>
            Cancel
          </button>
        </div>
      </div>
      <br />
    </>

    )
}

export default UpdateForm;