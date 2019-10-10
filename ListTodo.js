import React from "react";
export const ListTodo = props => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Sr</th>
            <th>Description</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {props.todos.map(todoObject => (
            <tr key={todoObject.todoId}>
              <td>{todoObject.todoId}</td>
              <td>{todoObject.description}</td>
              <td>
                <button onClick={props.onEdit.bind(null,todoObject.description,todoObject.todoId)}>Edit</button>
                <button onClick={props.onDelete.bind(null, todoObject.todoId)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};