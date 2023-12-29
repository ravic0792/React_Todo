import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"
import { todoItemsContext } from "./store/todo-items-store";

function TodoItems(){
  const {todoItems,deleteItem}=useContext(todoItemsContext);
  return (
    <div className={styles.itemsContainer}>
       {todoItems.map((item,index)=><TodoItem key={index} onClickDelete={()=>deleteItem(index)} todoName={item.todoName} todoDate={item.todoDate} />)}
    </div>
  );
}

export default TodoItems;