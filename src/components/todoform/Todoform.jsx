import React, { useState } from "react";
import Input from "../input/Input";
import Addbutton from "../addbutton/Addbutton";

const Todoform = ({ addTodo, setShowForm }) => {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todo || !date || !time || !description) return;

    const newTodo = {
      todo,
      date,
      time,
      description,
      id: Date.now(),
      completed: false,
    };

    addTodo(newTodo);

    setTodo("");
    setDate("");
    setTime("");
    setDescription("");
    setShowForm(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="todo"
        type="text"
        placeholder="Titel"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <Input
        name="time"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <Input
        name="date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Input
        name="description"
        type="text"
        placeholder="Beskrivning"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Addbutton />
    </form>
  );
};

export default Todoform;
