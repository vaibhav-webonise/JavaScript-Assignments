
const todoReducer = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            if(action.updateFlag===true){
                
                for(let i=0;i<state.length;i++){
                    if(state[i].id===action.id){
                        state[i].desc=action.text
                    }
                }
                return state=[...state]
            }else if(action.updateFlag===false){
                let todo={ id:action.id,desc:action.text}
                return state=[...state,todo]
            }
            
    
            
        case 'DELETE_TODO':
            return  state.filter((todo) => todo.id != action.id);
             
        default: return state
    }
}
export default todoReducer