import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ToDo from "./components/todo/ToDo";
import Addtodo from "./components/addtodo/Addtodo";
import Infopage from "./components/infopage/Infopage";
import Calenderpage from "./components/calenderpage/Calenderpage";
import AllTodosPage from "./components/alltodospage/AllTodosPage";
import Completedtaskspage from "./components/completedtaskspage/Completedtaskspage";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [list, setList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    setList(todos);

    const completedTodos =
      JSON.parse(localStorage.getItem("completedTodos")) || [];
    setCompletedList(completedTodos);
  }, []);

  const setComplete = (id) => {
    setList((prevList) => {
      const taskToComplete = prevList.find((task) => task.id === id);
      if (!taskToComplete) return prevList;

      const updatedList = prevList.filter((task) => task.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedList));

      setCompletedList((prevCompletedList) => {
        const newTask = {
          ...taskToComplete,
          completed: true,
          id: uuidv4(),
        };

        const updatedCompletedList = [...prevCompletedList, newTask];
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

  const deleteCompletedTodo = (id) => {
    setCompletedList((prevCompleted) => {
      const updatedCompleted = prevCompleted.filter((task) => task.id !== id);
      localStorage.setItem("completedTodos", JSON.stringify(updatedCompleted));
      return updatedCompleted;
    });
  };

  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/info" element={<Infopage showForm={showForm} />} />
          <Route path="/calendar" element={<Calenderpage list={list} />} />
          <Route
            path="/todos"
            element={
              <ToDo
                list={list}
                setList={setList}
                setComplete={setComplete}
                completedList={completedList}
                setCompletedList={setCompletedList}
                showForm={showForm}
                setShowForm={setShowForm}
              />
            }
          />
          <Route path="/addtodo" element={<Addtodo setList={setList} />} />
          <Route
            path="/alltodos"
            element={
              <AllTodosPage
                list={list}
                setComplete={setComplete}
                deleteTodo={deleteTodo}
              />
            }
          />
          <Route
            path="/completed-tasks"
            element={
              <Completedtaskspage
                completedList={completedList}
                deleteCompletedTodo={deleteCompletedTodo}
              />
            }
          />
        </Routes>
      </div>
      <Footer showForm={showForm} setShowForm={setShowForm} />
    </Router>
  );
};

export default App;
