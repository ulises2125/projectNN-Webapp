import { useState, useEffect } from "react";
import $ from "jquery";
import styles from "./login.module.css";

interface Idata {
  email: string;
  password: string;
}

const Login = () => {
  const [disable, setDisable] = useState<boolean>(false);
  const [error, setError] = useState({});
  const [data, setData] = useState<Idata>({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (!data.email) {
      $("#validateEmail").addClass(styles.invalid);
      setError({ ...error, email: "Debe ingresar un email" });
    } else if (!/\S+@\S+.\S+/.test(styles.invalid)) {
      $("#validateEmail").addClass(styles.invalid);
      setError({ ...error, email: "El email debe ser válido" });
    }
    if (!data.password) {
      $("#validatePassword").addClass(styles.invalid);
      setError({ ...error, password: "Debe ingresar una contraseña" });
    } else if (data.password.trim().length < 8) {
      $("#validatePassword").addClass(styles.invalid);
      setError({ ...error, password: "Debe tener mínimo 8 caracteres" });
    } else if (!/^(?=.\d)(?=.[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/.test(data.password)) {
      $("#validatePassword").addClass(styles.invalid);
      setError({
        ...error,
        password: "Debe tener una mayúscula, una minúscula y un dígito",
      });
    }
  }, [data]);

  const handleInputChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

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
                value={data.email}
                name="email"
                className={styles.input}
                placeholder="Correo"
                onChange={handleInputChange}
              />
              <span id="validateEmail"></span>
              <input
                id="validatePassword"
                value={data.password}
                name="password"
                className={styles.input}
                placeholder="Contraseña"
                onChange={handleInputChange}
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
