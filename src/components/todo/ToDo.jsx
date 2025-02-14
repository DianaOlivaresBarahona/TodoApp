import React, { useState } from "react";
import Todolist from "../todolist/Todolist";
import Todoform from "../todoform/Todoform";
import "./ToDo.css";

const ToDo = ({ list, setList }) => {
  const [showForm, setShowForm] = useState(false);

  const setComplete = (id) => {
    setList((prevList) =>
      prevList.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTodo = (id) => {
    setList((prevList) => prevList.filter((task) => task.id !== id));
  };

  const addTodo = (task) => {
    setList((prevList) => [...prevList, task]);
  };

  const today = new Date().toISOString().split("T")[0];

  const todaysTasks = list.filter((task) => task.date === today);

  return (
    <div>
      {!showForm && <h1 className="List-rubrik">Dagens göromål</h1>}

      {!showForm && (
        <Todolist
          list={todaysTasks}
          setComplete={setComplete}
          deleteTodo={deleteTodo}
        />
      )}

      <button onClick={() => setShowForm(!showForm)} className="add-todo-btn">
        {showForm ? "←" : "+"}
      </button>

      {showForm && <Todoform addTodo={addTodo} setShowForm={setShowForm} />}
    </div>
  );
};

export default ToDo;
