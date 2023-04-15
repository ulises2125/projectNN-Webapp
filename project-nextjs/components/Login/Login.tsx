import { useState } from "react";
import styles from "./login.module.css";

interface Idata {
  email: string;
  password: string;
}

const Login = () => {
  const [disable, setDisable] = useState<boolean>(false);
  const [data, setData] = useState<Idata>({
    email: "",
    password: "",
  });

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
                name="email"
                className={styles.input}
                placeholder="Correo"
              />
              <input
                name="password"
                className={styles.input}
                placeholder="Contraseña"
              />
              <button type="submit" className={styles.button}>
                Iniciar sesión
              </button>
              <button className={styles.buttonL}>
                ¿Has olvidado la contraseña?
              </button>
              <button disabled={disable} className={styles.buttonL}>
                Regístrate
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
