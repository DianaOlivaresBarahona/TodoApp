import React, { useState } from "react";
import Todoform from "../todoform/Todoform";

const Addtodo = ({ setList }) => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTodo = (task) => {
    if (task.todo.trim() === "") return;

    const newTodo = {
      todo: task.todo,
      date: task.date || new Date().toISOString().split("T")[0],
      time: task.time || "00.00",
      description: task.description,
      id: Date.now(),
      completed: false,
    };

    setList((prevList) => [...prevList, newTodo]);
    setTodo("");
    setDate("");
    setTime("");
    setDescription("");
  };

  return (
    <Todoform
      todo={todo}
      setTodo={setTodo}
      date={date}
      setDate={setDate}
      time={time}
      setTime={setTime}
      description={description}
      setDescription={setDescription}
      addTodo={handleAddTodo}
    />
  );
};

export default Addtodo;
