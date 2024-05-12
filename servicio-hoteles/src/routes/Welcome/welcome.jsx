import style from "./welcome.module.css";
import { Link } from "react-router-dom";
export const Welcome = () => {
  return (
    <>
      <section className={style.section_welcome}>
        <h1>¡Bienvenido!</h1>
        <Link to="/register">Registra un Hotel</Link>
      </section>
    </>
  );
};
