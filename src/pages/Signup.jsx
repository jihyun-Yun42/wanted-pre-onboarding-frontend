import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";

const Signup = () => {
  const navigate = useNavigate();

  const { changeInputHandler, valid, user } = useInput();

  const submitFormHandler = async (e) => {
    e.preventDefault();
    if (valid.email && valid.password) {
      try {
        await api.post("/auth/signup", user);
        navigate("/signin");
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
        {valid.email || <span>이메일 형식에 맞게 입력해주세요</span>}
      </label>

      <input
        data-testid="password-input"
        name="password"
        value={user.password}
        onChange={changeInputHandler}
      />
      {valid.password || <span>8자 이상 입력해주세요</span>}
      <button data-testid="signup-button" disabled={!valid.email || !valid.password}>
        회원가입
      </button>
    </form>
  );
};

export default Signup;
