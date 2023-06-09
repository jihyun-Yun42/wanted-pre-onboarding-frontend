import React, { useState } from "react";
import api from "../../api/axios";

const EditTodo = ({ item, setTodoList }) => {
  const [edit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState(item.todo);

  const clickEditHandler = () => {
    setEdit((pre) => !pre);
    setEditContent(item.todo);
  };

  const changeCheckboxHandler = async () => {
    try {
      const data = await api.put(`/todos/${item.id}`, {
        todo: item.todo,
        isCompleted: !item.isCompleted,
      });
      setTodoList((pre) => pre.map((e) => (e.id === item.id ? data.data : e)));
    } catch {
      alert("잠시 후 다시 시도해보세요");
    }
  };

  const clickDeleteHandler = async () => {
    try {
      await api.delete(`/todos/${item.id}`);
      setTodoList((pre) => pre.filter((e) => e.id !== item.id));
    } catch {
      alert("잠시 후 다시 시도해보세요");
    }
  };

  const changeInputHandler = (e) => {
    setEditContent(e.target.value);
  };

  const submitInputHandler = async () => {
    try {
      const data = await api.put(`/todos/${item.id}`, {
        todo: editContent,
        isCompleted: item.isCompleted,
      });
      setTodoList((pre) => pre.map((e) => (e.id === item.id ? data.data : e)));
      clickEditHandler();
    } catch {
      alert("잠시 후 다시 시도해보세요");
    }
  };

  return (
    <>
      {edit ? (
        <li>
          <label>
            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={changeCheckboxHandler}
            />
            <input
              data-testid="modify-input"
              value={editContent}
              onChange={changeInputHandler}
            />
          </label>
          <button data-testid="submit-button" onClick={submitInputHandler}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={clickEditHandler}>
            취소
          </button>
        </li>
      ) : (
        <li>
          <label>
            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={changeCheckboxHandler}
            />
            <span>{item.todo}</span>
          </label>
          <button data-testid="modify-button" onClick={clickEditHandler}>
            수정
          </button>
          <button data-testid="delete-button" onClick={clickDeleteHandler}>
            삭제
          </button>
        </li>
      )}
    </>
  );
};

export default EditTodo;
