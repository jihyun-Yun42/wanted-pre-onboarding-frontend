import React, { useLayoutEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import EditTodo from "./EditTodo";

const Todo = () => {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState([]);
  const token = localStorage.getItem("access_token");

  const getTodo = async () => {
    if (token) {
      try {
        const data = await api.get("todos");
        setTodoList(data.data);
      } catch {
        alert("잠시후 다시 시도해주세요");
      }
    } else {
      navigate("/signin");
    }
  };

  useLayoutEffect(() => {
    getTodo();
  }, [token]);

  return (
    <>
      <CreateTodo getTodo={getTodo} />
      {todoList.map((item, i) => (
        <EditTodo item={item} key={i} setTodoList={setTodoList} />
      ))}
    </>
  );
};

export default Todo;
