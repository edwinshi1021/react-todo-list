import React, { Component } from "react";
import "./Addtodo.scss";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      isComplete: false,
    };
  }

  handleOnChange = (e) => {
    this.setState({ ...this.state, title: e.target.value });
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { addNewTodo } = this.props;
    addNewTodo(this.state.title);
  };

  render() {
    return (
      <div className="add-todo">
        <form className="add-todo-form" onSubmit={this.handleOnSubmit}>
          <input
            className="add-todo-input"
            type="text"
            name="todo"
            onChange={this.handleOnChange}
          />
          <button type="submit" className="add-todo-btn">
            ADD
          </button>
        </form>
      </div>
    );
  }
}
