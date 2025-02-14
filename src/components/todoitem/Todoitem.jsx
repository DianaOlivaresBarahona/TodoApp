import React from "react";
import Deletebutton from "../deletebutton/Deletebutton";
import Completebutton from "../completebutton/Completebutton";
import "./Todoitem.css";

const Todoitem = ({ item, setComplete, deleteTodo }) => {
  return (
    <li
      className="todo-item"
      style={{ textDecoration: item.completed ? "line-through" : "none" }}
    >
      <div className="todo-header">
        <span className="todo-time">{item.time}</span>
        <span className="todo-title">{item.todo}</span>
        <span className="todo-buttons">
          <Completebutton onClick={() => setComplete(item.id)} />
          <Deletebutton onClick={() => deleteTodo(item.id)} />
        </span>
      </div>
      <p className="todo-description">{item.description}</p>
    </li>
  );
};

export default Todoitem;
