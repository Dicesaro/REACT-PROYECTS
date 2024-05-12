import style from "./App.module.css";

export const App = () => {
  return (
    <>
      <section className={style.section_hoteles}>
        <h1>Registro de Hotel</h1>
        <form className={style.form_hoteles}>
          <label>Name:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="email" />
          <label>Address:</label>
          <input type="text" />
          <label>Price:</label>
          <input type="text" />
          <label>Roomtype:</label>
          <input type="text" />
          <label>Phone number:</label>
          <input type="tel" />
          <label>Photo:</label>
          <input type="file" />
          <label>Departments:</label>
          <input type="text" />
          <button type="submit">Registrar</button>
        </form>
      </section>
    </>
  );
};
