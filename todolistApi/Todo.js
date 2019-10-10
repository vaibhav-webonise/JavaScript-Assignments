import React from "react";
import { AddTodo } from "./AddTodo";
import { ListTodo } from "./ListTodo";
import axios from "axios";
export class Todo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            desc: "",
            todos: [],
            flag: 0

        };
        this.id = 0;
    }

    componentDidMount() {
        axios({
            method: "get",
            url: "http://localhost:5000/todos"
        }).then((response) => {
            this.setState({
                todos: response.data
            })
        }).catch((err) => {
            console.error(err);
        })
    }

    onUserType = event => {
        let value = event.target.value;
        this.setState({
            desc: value
        });
    };

    onAddTodo = () => {

        let desc = this.state.desc;
        axios({
            method: "post",
            url: "http://localhost:5000/todos",
            data: {
                desc: desc
            }
        }).then((response) => {
            if (this.state.desc === '') {
                alert('Fields can not be empty..');
            }
            else {
                if (this.state.flag == 1) {
                    let todos = this.state.todos;
                    this.setState({
                        todos: todos,
                        flag: 0,
                        desc: ''
                    });
                }
                else {
                    let todo = response.data;
                    let todos = [...this.state.todos, todo];
                    this.setState({
                        desc: "",
                        todos: todos
                    });
                }

            }

        }).catch((err) => {
            console.error(err);
        })
    };

    onDelete = (id) => {
        axios({
            method: "delete",
            url: `http://localhost:5000/todos/${id}`
        }).then((response) => {
            let todos = this.state.todos.filter((todo) => todo.id !== id);
            this.setState({
                todos: todos
            })
        })
    }

    onEdit = (id) => {
        axios({
            method: "put",
            url: `http://localhost:5000/todos/${id}`
        }).then((response) => {
            let temp;
            let tempTodos = this.state.todos.filter((todo) => todo.id === id);
            for (let i = 0; i < tempTodos.length; i++) {
                if (tempTodos[i].id === id) {
                    temp = tempTodos[i].desc;
                }
            }
            this.setState({
                desc: temp,
                todos: tempTodos
            })

            this.state.flag = 1;
        })
    }
    render() {
        return (
            <div>
                <AddTodo desc={this.state.desc} onUserType={this.onUserType} onAddTodo={this.onAddTodo} />
                <ListTodo todos={this.state.todos} onEdit={this.onEdit} onDelete={this.onDelete} />
            </div>
        );
    }
}