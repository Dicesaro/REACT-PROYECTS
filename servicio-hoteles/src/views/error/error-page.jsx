import { useRouteError } from "react-router-dom";
import style from "./error.module.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <section className={style.section_error}>
        <h1>Pagina no encontrada!</h1>
        <p>la ruta que buscas no existe...</p>
      </section>
    </>
  );
}
