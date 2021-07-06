import axios from 'axios'
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const LOAD_TODO = 'LOAD_TODO'

export const addTodo = (id, text, updateFlag) => ({
    type: ADD_TODO,
    text,
    id,
    updateFlag
})

export const removeTodo = id => ({
    type: REMOVE_TODO,
    id
})

export const loadTodo = todos => ({
    type: LOAD_TODO,
    todos
})

export const saveTodo = (id, text, flag) => {
    if (flag) {
        return dispatch => {
            axios({
                method: "put",
                url: `http://localhost:5000/todos/${id}`,
                data: { desc: text }


            }).then(response => {
                dispatch(addTodo(id, text, flag));
            })
        };

    } else {
        return dispatch => {
            axios({
                method: "post",
                url: "http://localhost:5000/todos",
                data: {
                    desc: text
                }
            }).then(response => {
                dispatch(addTodo(id, text, flag));
            })
        };

    }

};

export const getData = () => {
    return dispatch => {
        axios({
            method: 'get',
            url: `http://localhost:5000/todos`
        }).then((response) => {
            dispatch(loadTodo(response.data));
        }).catch((err) => {
            console.error(err);
        })
    }
};

export const deleteTodo = (id) => {
    return dispatch => {
        axios({
            method: 'delete',
            url: `http://localhost:5000/todos/${id}`
        }).then((response) => {
            dispatch(removeTodo(id));
        }).catch((err) => {
            console.error(err);
        })
    }
};
