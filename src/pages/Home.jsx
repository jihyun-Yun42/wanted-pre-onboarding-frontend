import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  return (
    <>
      {token ? (
        <button onClick={() => navigate("/todo")}>투두</button>
      ) : (
        <>
          <span>로그인 먼저 해주세요</span>
          <br />
          <button onClick={() => navigate("/signin")}>로그인</button>
          <button onClick={() => navigate("/signup")}>회원가입</button>
        </>
      )}
    </>
  );
};

export default Home;
