import React from "react";
import { ITodo } from "../interfaces";

type ToDoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
};

export const ToDoList: React.FC<ToDoListProps> = ({
  todos,
  onRemove,
  onToggle,
}) => {
  if (todos.length === 0) {
    return <p className="center"> There are no items to do for now</p>;
  }

  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()

    onRemove(id)
  }
  return (
    <ul>
      {todos.map((todo) => {
        const { id, title, completed } = todo;
        const classes = ["todo"];

        if (completed) {
          classes.push("completed");
        }

        return (
          <li className={classes.join(" ")} key={id}>
            <label>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => onToggle(id)}
              />
              <span>{title}</span>
              <i
                className="material-icons red-text"
                onClick={event => removeHandler(event, id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
