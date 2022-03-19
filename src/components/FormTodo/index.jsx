import React, { Component, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import style from "./style.module.css";

class FormTodo extends Component {
  constructor(props) {
    super();
    this.state = {
      todo: {
        id: "",
        task: "",
        completed: false,
      },
    };
  }

  handleTaskInputChange = (e) => {
    this.setState({ todo: { ...this.state.todo, task: e.target.value } });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.todo.task.trim()) {
      this.props.addTodo({ ...this.state.todo, id: uuidv4() });
      this.setState({ todo: { ...this.state.todo, task: "" } });
    } else {
      alert("Isi input terlebih dahulu...");
    }
  };

  render() {
    return (
      <div>
        <form className={style.container} onSubmit={this.handleSubmit}>
          <input
            className={style.input}
            type="text"
            name="task"
            value={this.state.todo.task}
            onChange={this.handleTaskInputChange}
          />
          <button className={style.btn} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormTodo;
