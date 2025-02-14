import React from "react";
import Todoitem from "../todoitem/Todoitem";
import "./Todolist.css";

const Todolist = ({ list, setComplete, deleteTodo }) => {
  return (
    <ul className="todo-list">
      {list.length === 0 ? (
        <li>Inga uppgifter för idag</li>
      ) : (
        list.map((item) => (
          <Todoitem
            key={item.id}
            item={item}
            setComplete={setComplete}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </ul>
  );
};

export default Todolist;
