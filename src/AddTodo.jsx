import styles from "./AddTodo.module.css"
import { useContext, useRef} from "react";
import { IoMdAdd } from "react-icons/io";
import { todoItemsContext } from "./store/todo-items-store";

function AddTodo(){
  
  const {addNewItem}=useContext(todoItemsContext);

  const updatedInputName=useRef();
  const updatedInputDate=useRef();
  
  
  function handleAddClick(event){
  event.preventDefault();
  const inputDate=updatedInputDate.current.value;
  const inputName=updatedInputName.current.value;
  addNewItem(inputDate,inputName); 
  updatedInputDate.current.value="";
  updatedInputName.current.value="";
  }

  return <div className="container text-center">
            <form onSubmit={handleAddClick}   className="row kg-row">
                <div className="col-6"><input ref={updatedInputName}  type="text"  placeholder="Enter Todo Here"  /></div>
                <div className="col-4"><input ref={updatedInputDate}  type="date" /></div>
                <div className="col-2"><button type="submit" className="btn btn-success kg-buttton"><IoMdAdd /></button></div>
            </form>
          </div>
}
export default AddTodo;