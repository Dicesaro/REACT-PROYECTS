import style from "./App.module.css";
import { useState } from "react";

const InputData = ({ Text, Type, onChange, Name }) => {
  return (
    <div className={style.input_data}>
      <label>{Text}</label>
      <input type={Type} onChange={onChange} name={Name} />
    </div>
  );
};

export const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    price: "",
    roomtype: "",
    phoneNumber: "",
    photo: "",
    departments: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Datos del formulario:", formData);
  };

  return (
    <>
      <section className={style.section_hoteles}>
        <h1>Registro de Hotel</h1>
        <form onSubmit={handleSubmit} className={style.form_hoteles}>
          <InputData
            Type="text"
            Text="Name:"
            Name="name"
            onChange={handleChange}
          />
          <InputData
            Type="email"
            Text="Email:"
            Name="email"
            onChange={handleChange}
          />
          <InputData
            Type="text"
            Text="Address:"
            Name="address"
            onChange={handleChange}
          />
          <InputData
            Type="text"
            Text="Price:"
            Name="price"
            onChange={handleChange}
          />
          <InputData
            Type="text"
            Text="Roomtype:"
            Name="roomtype"
            onChange={handleChange}
          />
          <InputData
            Type="tel"
            Text="Phone number:"
            Name="phoneNumber"
            onChange={handleChange}
          />
          <InputData
            Type="file"
            Text="Photo:"
            Name="photo"
            onChange={handleChange}
          />
          <InputData
            Type="text"
            Text="Departments:"
            Name="departments"
            onChange={handleChange}
          />
          <button type="submit">Registrar</button>
        </form>
      </section>
    </>
  );
};
