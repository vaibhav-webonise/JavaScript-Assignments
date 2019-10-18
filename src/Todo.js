import React from "react";
import { AddTodo } from "./AddTodo";
import { ListTodo } from "./ListTodo";
import { connect } from 'react-redux'
import { saveTodo, deleteTodo, getData } from '/home/webonise/reduxtodo/src/store/action/todoactions.js'

export class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            desc: "",
            updateFlag: false,
            id: 0,
            editId: 0,
            buttonText: "Add"
        };
    }

    componentDidMount() {
        this.props.getData()
    }

    onUserType = event => {
        let value = event.target.value;
        this.setState({
            desc: value
        });
    };

    onAddTodo = () => {
        if (this.state.desc === '') {
            alert('Field can not be empty...');
        }
        else {

            if (this.state.updateFlag === true) {

                let tempTodos = this.props.todos;
                for (let index = 0; index < tempTodos.length; index++) {
                    if (tempTodos[index].id == this.state.editId) {
                        tempTodos[index].desc = this.state.desc;
                        this.props.addTodo(this.state.editId, tempTodos[index].desc, this.state.updateFlag)
                    }
                }
                this.setState({
                    desc: '',
                    updateFlag: false,
                    buttonText: "Add"
                })

            }
            else {
                this.props.addTodo(++this.state.id, this.state.desc, this.state.updateFlag);
                this.setState({
                    desc: ''
                })
            }
        }
    };

    onDelete = (id) => {
        this.props.deleteTodo(id)
    }

    onEdit = (paramId) => {
        let tempDesc
        let tempTodosArray = this.props.todos;
        for (let index = 0; index < tempTodosArray.length; index++) {
            if (tempTodosArray[index].id === paramId) {
                tempDesc = tempTodosArray[index].desc
            }
        }
        this.setState({
            desc: tempDesc,
            buttonText: "update"
        });
        this.state.updateFlag = true;
        this.state.editId = paramId
    }

    render() {
        return (
            <div>
                <AddTodo desc={this.state.desc} buttonText={this.state.buttonText} onUserType={this.onUserType} onAddTodo={this.onAddTodo} />
                <ListTodo todos={this.props.todos} onEdit={this.onEdit} onDelete={this.onDelete} />
            </div>
        );
    }
}

const mapStatetoProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    addTodo: (todoId, text, flag) => dispatch(saveTodo(todoId, text, flag)),
    deleteTodo: id => dispatch(deleteTodo(id)),
    getData: () => dispatch(getData())

})

export default connect(mapStatetoProps, mapDispatchToProps)(Todo);
