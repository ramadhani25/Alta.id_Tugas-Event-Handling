import "./App.css";
import React, { Component, useState } from "react";
import FormTodo from "./components/FormTodo/index";
import ListTodo from "./components/ListTodo/index";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      todos: [],
    };
  }
  // const [todos, setTodos] = useState([]);

  addTodo = (todo) => {
    this.setState({ todos: [todo, ...this.state.todos] });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  removeTodo = (id) => {
    const newTodo = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({ todos: newTodo });
  };

  render() {
    return (
      <div className="App">
        <h1>TODOS</h1>
        <FormTodo addTodo={this.addTodo} />
        <ListTodo
          todos={this.state.todos}
          removeTodo={this.removeTodo}
          toggleComplete={this.toggleComplete}
        />
      </div>
    );
  }
}

export default App;
