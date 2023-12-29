
import { MdDelete } from "react-icons/md";
function TodoItem({todoName,todoDate,onClickDelete}){
  
  return <div className="kg-row container ">
  <div className="row kg-row ">
    <div className="col-6">{todoName}</div>
    <div className="col-4">{todoDate}</div>
    <div className="col-2"><button onClick={onClickDelete} type="button" className={`btn btn-danger `}><MdDelete /></button>
    </div>
  </div>
 </div>;
}

export default TodoItem;