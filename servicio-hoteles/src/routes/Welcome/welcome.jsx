import style from "./welcome.module.css";
import { Link } from "react-router-dom";
export const Welcome = () => {
  return (
    <>
      <section className={style.section_welcome}>
        <div className={style.space} />
        <div className={style.text}>
          <h1>¡Bienvenido amigo hotelero!</h1>
          <button>
            <Link to="/register">Registra un Hotel</Link>
          </button>
        </div>
      </section>
    </>
  );
};
