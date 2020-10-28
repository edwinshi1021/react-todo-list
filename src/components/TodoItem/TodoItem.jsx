import React from "react";
import "./TodoItem.scss";
const TodoItem = ({ todo, toggleIsComplete, deleteTodo }) => {
  const getStyle = () => {
    if (todo.isComplete) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div className="todo-item">
      <input
        className="checkbox"
        onClick={() => toggleIsComplete(todo.id)}
        type="checkbox"
      />
      <div style={getStyle()} className="todo-item-title">
        {todo.title}
      </div>
      <button className="todo-item-btn" onClick={() => deleteTodo(todo.id)}>
        delete
      </button>
    </div>
  );
};

export default TodoItem;
