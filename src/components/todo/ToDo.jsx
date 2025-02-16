import React, { useState, useEffect } from "react";
import Todolist from "../todolist/Todolist";
import Todoform from "../todoform/Todoform";

import "./ToDo.css";

const ToDo = ({
  list,
  setList,
  completedList,
  setCompletedList,
  showForm,
  setShowForm,
}) => {
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const completedTodos =
      JSON.parse(localStorage.getItem("completedTodos")) || [];
    setList(todos);
    setCompletedList(completedTodos);
  }, [setList, setCompletedList]);

  const setComplete = (id) => {
    setList((prevList) => {
      const taskToComplete = prevList.find((task) => task.id === id);
      if (!taskToComplete) return prevList;

      const updatedList = prevList.filter((task) => task.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedList));

      setCompletedList((prevCompletedList) => {
        const alreadyInCompleted = prevCompletedList.some(
          (task) => task.id === taskToComplete.id
        );

        if (alreadyInCompleted) {
          console.log("Uppgiften finns redan i completedList.");
          return prevCompletedList;
        }

        const updatedCompletedList = [
          ...prevCompletedList,
          { ...taskToComplete, completed: true },
        ];
        localStorage.setItem(
          "completedTodos",
          JSON.stringify(updatedCompletedList)
        );
        return updatedCompletedList;
      });

      return updatedList;
    });
  };

  const deleteTodo = (id) => {
    setList((prevList) => {
      const updatedList = prevList.filter((task) => task.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  const addTodo = (task) => {
    setList((prevList) => [...prevList, task]);
    localStorage.setItem("todos", JSON.stringify([...list, task]));
  };

  const today = new Date().toISOString().split("T")[0];
  const todaysTasks = list.filter((task) => task.date === today);

  return (
    <div>
      {!showForm && <h1 className="List-rubrik">Todays Tasks</h1>}

      {!showForm && (
        <Todolist
          list={todaysTasks}
          setComplete={setComplete}
          deleteTodo={deleteTodo}
        />
      )}

      {showForm && <Todoform addTodo={addTodo} setShowForm={setShowForm} />}
    </div>
  );
};

export default ToDo;
