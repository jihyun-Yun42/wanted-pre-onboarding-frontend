import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import useInput from "../hooks/useInput";

const Signin = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  useLayoutEffect(() => {
    if (token) {
      navigate("/todo");
    }
  }, [token]);

  const { changeInputHandler, valid, user } = useInput();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    if (valid.email && valid.password) {
      try {
        const data = await api.post("/auth/signin", user);
        localStorage.setItem("access_token", data.data.access_token);
        navigate("/todo");
      } catch {
        alert("잠시후 다시 시도해주세요");
      }
    } else {
      alert("아이디 또는 비밀번호를 다시 확인해주세요");
    }
  };

  return (
    <form onSubmit={submitFormHandler}>
      <label htmlFor="">
        <input
          data-testid="email-input"
          name="email"
          value={user.email}
          onChange={changeInputHandler}
        />
        <br />
        {valid.email || <span>이메일 형식에 맞게 입력해주세요</span>}
      </label>

      <br />
      <input
        data-testid="password-input"
        name="password"
        value={user.password}
        onChange={changeInputHandler}
      />
      <br />
      {valid.password || <span>8자 이상 입력해주세요</span>}
      <br />
      <button data-testid="signin-button" disabled={!valid.email || !valid.password}>
        로그인
      </button>
    </form>
  );
};

export default Signin;
