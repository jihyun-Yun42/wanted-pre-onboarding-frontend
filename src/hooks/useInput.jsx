import { useState } from "react";
import { emailValidTest, pwVaildTest } from "../utils/vaild";

const useInput = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [valid, setValid] = useState({
    email: false,
    password: false,
  });

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    if (name === "email") {
      return setValid({ ...valid, email: emailValidTest(value) });
    } else {
      return setValid({ ...valid, password: pwVaildTest(value) });
    }
  };
  return { changeInputHandler, valid, user };
};

export default useInput;
