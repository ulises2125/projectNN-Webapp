import $ from "jquery";
import styles from "./login.module.css";
import { useReducer, useState } from "react";

const TYPES = {
  SET_EMAIL: "SET_EMAIL",
  SET_PASSWORD: "SET_PASSWORD",
};

const initialState = {
  email: null,
  password: null,
};

const reducer = (state = initialState, action: any): typeof initialState => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.SET_EMAIL: {
      return { ...state, email: payload };
    }
    case TYPES.SET_PASSWORD: {
      return { ...state, password: payload };
    }
    default:
      return state;
  }
};

const useReducerLogin = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [disable, setDisable] = useState<boolean>(false);
  const [error, setError] = useState({});
  const validateLogin = (data: any) => {
    if (!data) {
      let inputEmail = $("#validateEmail");
      console.log(inputEmail, "AAAAAAAAAA");
      inputEmail.addClass(styles.invalid);
    }
  };

  const setEmail = (text: any) => {
    dispatch({ type: TYPES.SET_EMAIL, payload: text });
    validateLogin(text);
  };

  const setPassword = (text: any) => {
    dispatch({ type: TYPES.SET_PASSWORD, payload: text });
  };

  return {
    setEmail,
    setPassword,
    validateLogin,
    state,
  };
};

export default useReducerLogin;
