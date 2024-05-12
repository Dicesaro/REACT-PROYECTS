import style from "./welcome.module.css";
export const Welcome = () => {
  return (
    <>
      <section className={style.section_welcome}>
        <h1>¡Bienvenido!</h1>
        <a href="/register">Registra un Hotel</a>
      </section>
    </>
  );
};
