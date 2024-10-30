import { createContext,useContext } from "react";

export const TodoContext = createContext({
    Todo:[
        {
            id: 1,
            Todo:'Todo msg',
            completed:false,
        } 
    ],
    addTodo:(Todo) => {},
    updateTodo:(id,Todo) =>{},
    deleteTodo:(id) => {},
    togglecomplete:(id) =>{}
}) 

export const useTodo  = () =>{
    return useContext(TodoContext)
}


export const Todoprovider = TodoContext.Provider 