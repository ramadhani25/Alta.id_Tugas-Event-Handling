import React from "react";
import Todo from "../Todo";

class ListTodo extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={this.props.removeTodo}
            toggleComplete={this.props.toggleComplete}
          />
        ))}
      </div>
    );
  }
}

export default ListTodo;
