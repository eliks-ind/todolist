import React from "react";
import "./App.css";
import ToDoList from "./components/todolist";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <h5>By Eldar</h5>
      <ToDoList />
    </div>
  );
}

export default App;
