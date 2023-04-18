import { useState, useEffect } from "react";
import $ from "jquery";
import styles from "./login.module.css";
import useReducerLogin from "./useReducerLogin";
interface Idata {
  email: string;
  password: string;
}

const Login = () => {
  const { setEmail, setPassword, validateLogin, state } = useReducerLogin();

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.divGeneral}>
        <div className={styles.divLeft}>
          <div className={styles.center}>
            <h1>Logo</h1>
            <h2>Regístrate para apoyar </h2>
          </div>
        </div>
        <div className={styles.divRight}>
          <div className={styles.center}>
            <div className={styles.cabezal}>
              <h1>Logo</h1>
              <h2>Regístrate para apoyar </h2>
            </div>
            <span>Iniciar sesión</span>
            <form onSubmit={handleSubmit}>
              <input
                id="validateEmail"
                value={state.email}
                name="email"
                className={styles.input}
                placeholder="Correo"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span id="validateEmail"></span>
              <input
                id="validatePassword"
                value={state.password}
                name="password"
                className={styles.input}
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span id="validatePassword"></span>
              <button type="submit" className={styles.button}>
                Iniciar sesión
              </button>
              <div className={styles.registerButton}>
                <button className={styles.buttonL}>
                  ¿Has olvidado la contraseña?
                </button>
                <button className={styles.buttonL}>Regístrate</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
