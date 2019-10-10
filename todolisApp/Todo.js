import React from "react";
import { AddTodo } from "./AddTodo";
import { ListTodo } from "./ListTodo";
export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            todosArray: [],
            isUpdate :false,    
        };
        this.todoId = 1;
        this.todoEditId=0;
        
    }

    onUserType = event => {
        let value = event.target.value;
        this.setState({
            description: value
        });
    };

    onAddTodo = () => {
        if(this.state.description===''){
            alert('Field can not be empty...');
        }

        else{
            if(this.state.isUpdate){
                let tempTodos = this.state.todosArray;
                for(let index=0;index<tempTodos.length;index++) {
                    if(tempTodos[index].todoId==this.state.todoEditId) {
                        tempTodos[index].description = this.state.description;
                    }
                }
                this.setState({
                    todosArray : tempTodos,
                    description:"",
                    isUpdate:false
                })
                return;
            }
            else{
                let todoObject = {
                    description: this.state.description,
                    todoId: this.todoId++
                };
                let todos = [...this.state.todosArray, todoObject];
                this.setState({
                    todosArray: todos,
                    description: ""
                });
            }
        }
        
        
    };

    onDelete = (id) => {
        let todos = this.state.todosArray.filter((todoObject) => todoObject.todoId != id);
        this.setState({
            todosArray: todos
        })
    }

    onEdit = (value, id) => {
        this.setState({
            description: value
        });
        this.state.isUpdate = true;
        this.state.todoEditId = id;
    }
    

    render() {
        return (
            <div>
                <AddTodo desc={this.state.description} onUserType={this.onUserType} onAddTodo={this.onAddTodo} />
                <ListTodo todos={this.state.todosArray} onEdit={this.onEdit} onDelete={this.onDelete} />
            </div>
        );
    }
}