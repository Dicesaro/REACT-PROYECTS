import style from "./App.module.css";

const InputData = ({ Text, Type }) => {
  return (
    <div className={style.input_data}>
      <label>{Text}</label>
      <input type={Type} />
    </div>
  );
};
export const App = () => {
  return (
    <>
      <section className={style.section_hoteles}>
        <h1>Registro de Hotel</h1>
        <form method="post" className={style.form_hoteles}>
          <InputData Text="Name:" Type="text" />
          <InputData Text="Email:" Type="email" />
          <InputData Text="Address:" Type="text" />
          <InputData Text="Price:" Type="text" />
          <InputData Text="Roomtype:" Type="text" />
          <InputData Text="Phone number:" Type="tel" />
          <InputData Text="Photo:" Type="file" />
          <InputData Text="Departments:" Type="text" />
          <button type="submit">Registrar</button>
        </form>
      </section>
    </>
  );
};
