import { createContext, useReducer } from "react";

export const todoItemsContext=createContext({
  todoItems:[],
  addNewItem:()=>{},
  deleteItem:()=>{}
});

function todoItemsReducer(currentTodoItems,action){
  let newTodoItems=currentTodoItems;
  if(action.type==="ADD_ITEM"){
    newTodoItems=[...currentTodoItems,{todoName:action.payload.inputName,todoDate:action.payload.inputDate}];
  }else if(action.type==="DELETE_ITEM"){
     newTodoItems =currentTodoItems.filter((item,ind)=> (action.payload.index!==ind));
  }
  return newTodoItems;
}

function TodoItemsContextProvider({children}){
 
 const [todoItems,dispatchTodoItems]= useReducer(todoItemsReducer,[]);

  function addNewItem(inputName,inputDate){
    const newItemAction={
    type:"ADD_ITEM",
    payload:{
      inputName,
      inputDate
    }
   }
   dispatchTodoItems(newItemAction);
  }

  function deleteItem(index){
     
      const deleteAction={
        type:"DELETE_ITEM",
        payload:{
          index
        }
       }
       dispatchTodoItems(deleteAction);
  }
  return <todoItemsContext.Provider value={{todoItems,addNewItem,deleteItem}}>{children}</todoItemsContext.Provider>
}

export default TodoItemsContextProvider;