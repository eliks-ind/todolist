import React, { useState } from "react";
import "./todolist.css";
import Button from "./button/button";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // const toggleComplete = (id: number) => {
  //
  // };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new task..."
      />
      <Button onClick={addTodo}>Add</Button>

      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text + " "}
            <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
