export const ADD_TODO='ADD_TODO'
export const DELETE_TODO='DELETE_TODO'

export const addTodo=(id,text,updateFlag)=>({
    type:ADD_TODO,
    text,
    id,
    updateFlag
})

export const deleteTodo=id=>({
    type:DELETE_TODO,
    id
})
