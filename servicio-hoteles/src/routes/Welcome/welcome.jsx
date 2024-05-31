import style from "./welcome.module.css";
import { Link } from "react-router-dom";
import welcome from "../../assets/welcome.png";
export const Welcome = () => {
  return (
    <>
      <section className={style.section_welcome}>
        <div className={style.img}>
          <img src={welcome} alt="hotel" />
        </div>
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
