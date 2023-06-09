import React, { useContext, useState } from "react";
import api from "../api/axios";

const CreateTodo = ({ getTodo }) => {
  const [todo, setTodo] = useState("");

  const changeInputHandler = (e) => {
    setTodo(e.target.value);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    try {
      await api.post("/todos", { todo });
      getTodo();
      setTodo("");
    } catch {
      alert("잠시 후 다시 시도해주세요");
    }
  };

  return (
    <form onSubmit={submitFormHandler}>
      <input data-testid="new-todo-input" value={todo} onChange={changeInputHandler} />
      <button data-testid="new-todo-add-button" type="submit">
        추가
      </button>
    </form>
  );
};

export default CreateTodo;
