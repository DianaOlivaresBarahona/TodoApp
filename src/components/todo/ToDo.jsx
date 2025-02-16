import React, { useState, useEffect } from "react";
import Todolist from "../todolist/Todolist";
import Todoform from "../todoform/Todoform";
import "./ToDo.css";

const ToDo = ({ list, setList, completedList, setCompletedList }) => {
  const [showForm, setShowForm] = useState(false);

  // Lägg till funktioner för att synkronisera med localStorage direkt här
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
      if (!taskToComplete) return prevList; // Om uppgiften inte finns, returnera listan som den är

      // Ta bort uppgiften från aktiva listan
      const updatedList = prevList.filter((task) => task.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedList)); // Uppdatera todos i localStorage

      // Lägg till uppgiften i completedList
      setCompletedList((prevCompletedList) => {
        // Kontrollera om uppgiften redan finns i completedList (baserat på ID)
        const alreadyInCompleted = prevCompletedList.some(
          (task) => task.id === taskToComplete.id
        );

        if (alreadyInCompleted) {
          console.log(
            "Uppgiften finns redan i completedList, inget läggs till."
          );
          return prevCompletedList; // Om uppgiften redan finns, returnera original listan utan ändringar
        }

        // Om den inte finns, lägg till den utan att ändra på ID
        const updatedCompletedList = [
          ...prevCompletedList,
          { ...taskToComplete, completed: true }, // Behåll det ursprungliga ID
        ];
        localStorage.setItem(
          "completedTodos",
          JSON.stringify(updatedCompletedList)
        ); // Uppdatera completedTodos i localStorage
        return updatedCompletedList;
      });

      return updatedList; // Retur den uppdaterade aktiva listan
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
