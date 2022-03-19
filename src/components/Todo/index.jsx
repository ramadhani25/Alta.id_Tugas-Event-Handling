import React, { Component } from "react";
import style from "./style.module.css";

class Todo extends Component {
  // ({ todo, toggleComplete, removeTodo })
  constructor(props) {
    super();
  }

  handleCheckboxClick = () => {
    this.props.toggleComplete(this.props.todo.id);
  };

  handleRemoveClick = () => {
    this.props.removeTodo(this.props.todo.id);
  };

  render() {
    return (
      <ul style={{ display: "flex" }}>
        <div style={{ display: "flex" }}>
          <input
            type="checkbox"
            defaultChecked={this.props.todo.completed}
            onChange={this.handleCheckboxClick}
          />
          <li
            style={{
              listStyle: "none",
              textDecoration: this.props.todo.completed ? "line-through" : null,
            }}
          >
            {this.props.todo.task}
          </li>
        </div>
        <button className={style.btn} onClick={this.handleRemoveClick}>
          Delete
        </button>
      </ul>
    );
  }
}

export default Todo;
