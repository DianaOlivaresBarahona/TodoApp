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

const App = () => {
  const [list, setList] = useState([]); // Aktiva uppgifter
  const [completedList, setCompletedList] = useState([]); // Slutförda uppgifter

  // 🔹 Funktion för att markera uppgift som klar
  const setComplete = (id) => {
    setList((prevList) => {
      const taskToComplete = prevList.find((task) => task.id === id);
      if (!taskToComplete) return prevList;

      setCompletedList((prevCompleted) => [...prevCompleted, taskToComplete]); // Flytta till completedList
      return prevList.filter((task) => task.id !== id); // Ta bort från aktiva uppgifter
    });
  };

  // 🔹 Funktion för att ta bort uppgift direkt från listan
  const deleteTodo = (id) => {
    const filtered = list.filter((task) => task.id !== id);
    setList(filtered);
    localStorage.setItem("todos", JSON.stringify(filtered));
  };

  // 🔹 Funktion för att ta bort en slutförd uppgift från completedList
  const deleteCompletedTodo = (id) => {
    setCompletedList((prevCompleted) =>
      prevCompleted.filter((task) => task.id !== id)
    );
  };

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      setList(JSON.parse([todos]));
    }
  }, []);

  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/info" element={<Infopage />} />
          <Route path="/calendar" element={<Calenderpage list={list} />} />
          <Route
            path="/todos"
            element={
              <ToDo list={list} setList={setList} setComplete={setComplete} />
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
      <Footer />
    </Router>
  );
};

export default App;
