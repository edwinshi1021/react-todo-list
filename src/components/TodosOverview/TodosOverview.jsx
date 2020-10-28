import React, { Component } from "react";
import AddTodo from "../AddTodo/AddTodo";
import TodoItem from "../TodoItem/TodoItem";
import "./TodosOverview.scss";
class TodosOverview extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          id: 1,
          title: "read a book",
          isComplete: false,
        },
        {
          id: 2,
          title: "play video games",
          isComplete: false,
        },
        {
          id: 3,
          title: "Work Out",
          isComplete: false,
        },
      ],
    };
  }

  toggleIsComplete = (id) => {
    console.log(id);
    this.setState({
      ...this.state,
      todo: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.isComplete = !todo.isComplete;
        }
        return todo;
      }),
    });
  };

  deleteTodo = (id) => {
    this.setState({
      ...this.state,
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addNewTodo = (title) => {
    this.setState({
      ...this.state,
      todos: [
        ...this.state.todos,
        { id: Date.now(), title, isComplete: false },
      ],
    });
  };

  render() {
    return (
      <div className="todos-overview">
        <AddTodo addNewTodo={this.addNewTodo} />
        {this.state.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleIsComplete={this.toggleIsComplete}
            deleteTodo={this.deleteTodo}
          />
        ))}
      </div>
    );
  }
}

export default TodosOverview;
