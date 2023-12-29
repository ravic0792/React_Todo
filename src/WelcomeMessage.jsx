import { useContext } from "react";
import { todoItemsContext } from "./store/todo-items-store";

function WelcomeMessage(){
  const {todoItems}=useContext(todoItemsContext);

  return todoItems.length===0&&<p>There is nothing to do for you</p>;
}
export default WelcomeMessage