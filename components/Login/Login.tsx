import { useState, useEffect } from "react";
import $ from "jquery";
import styles from "./login.module.css";
import axios from "axios";
interface Idata {
  email: string;
  password: string;
}

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await axios.post("/api/auth/login", credentials);
    console.log(response);
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
                type="email"
                name="email"
                className={styles.input}
                placeholder="Correo"
                onChange={handleChange}
              />
              <span id="validateEmail"></span>
              <input
                id="validatePassword"
                type="password"
                name="password"
                className={styles.input}
                placeholder="Contraseña"
                onChange={handleChange}
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
