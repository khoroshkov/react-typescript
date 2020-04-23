import React, { useState } from "react";

interface ToDoFormProps {
  onAdd(title: string): void
}

export const ToDoForm: React.FC<ToDoFormProps> = (props) => {
  const [title, setTitle] = useState<string>("");

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onKeyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(title)
      setTitle("")
    }
  }

  return (
    <div className="input-field mt3">
      <input
        onChange={changeHandler}
        value={title}
        type="text"
        id="title"
        placeholder="Type here"
        onKeyPress={onKeyPressHandler}
      />
      <label htmlFor="title" className="active">
        Type your todo here
      </label>
    </div>
  );
};
