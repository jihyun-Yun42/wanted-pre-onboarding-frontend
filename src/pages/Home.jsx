import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/todo")}>투두</button>
      <button onClick={() => navigate("/signin")}>로그인</button>
      <button onClick={() => navigate("/signup")}>회원가입</button>
    </>
  );
};

export default Home;
