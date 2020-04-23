import React, { useEffect, useState } from "react";
import { ToDoForm } from "../Components/ToDoForm";
import { ToDoList } from "../Components/ToDoList";
import { ITodo } from "../interfaces";

declare var confirm: (question: string) => boolean;

export const todolistPage: React.FC = () => {
  const [todos, setTodos] = useState!<ITodo[]>([]);

  useEffect!(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]") as ITodo[];
    setTodos(saved);
  }, []);

  useEffect!(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleHandler = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const removeHandler = (id: number) => {
    const shouldRemove = confirm("Are You sure You want to delete it?");

    if (shouldRemove) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };
  return (
    <>
      <ToDoForm onAdd={addHandler} />

      <ToDoList
        todos={todos}
        onToggle={toggleHandler}
        onRemove={removeHandler}
      />
    </>
  );
};
