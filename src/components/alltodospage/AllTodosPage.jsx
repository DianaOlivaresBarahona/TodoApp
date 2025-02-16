import React from "react";
import Todolist from "../todolist/Todolist";

const AllTodosPage = ({ list, setComplete, deleteTodo }) => {
  return (
    <div>
      <h1>All Tasks</h1>

      <Todolist list={list} setComplete={setComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default AllTodosPage;
