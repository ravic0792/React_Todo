import AppName  from "./AppName"
import AddTodo from "./AddTodo"
import TodoItems from "./TodoItems"
import { useState,useReducer } from "react";
import WelcomeMessage from "./WelcomeMessage";
import TodoItemsContextProvider, { todoItemsContext } from "./store/todo-items-store";



function App() {
  
  
  
  return (
         <TodoItemsContextProvider>
         <center className="todo-container">
           <AppName/>
           <AddTodo />
           <WelcomeMessage />
           <TodoItems />
        </center>
        </TodoItemsContextProvider>
        );
}

export default App
