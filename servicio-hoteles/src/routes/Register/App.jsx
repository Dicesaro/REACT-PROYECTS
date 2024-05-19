import style from "./App.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

const domain = "http://192.168.18.104:3000";

const getDepartments = async () => {
  const { data } = await axios.get(
    "http://192.168.18.104:3000/api/departments"
  );
  console.log(data);
  return data;
};

const InputData = ({ text, type, onChange, name }) => {
  return (
    <div className={style.input_data}>
      <label>{text}</label>
      <input type={type} onChange={onChange} name={name} />
    </div>
  );
};

export const App = () => {
  const [departaments, setDepartments] = useState([]);

  useEffect(() => {
    getDepartments().then((data) => setDepartments(data));
  }, []);

  console.log(departaments);

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

  const [image, setImage] = useState();
  const handleImageChange = (e) => {
    console.log(e.target.files);
    setImage(URL.createObjectURL(e.target.files[0]));
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
            type="text"
            text="Nombre:"
            name="name"
            onChange={handleChange}
          />
          <InputData
            type="email"
            text="Correo:"
            name="email"
            onChange={handleChange}
          />
          <InputData
            type="text"
            text="Direccion:"
            name="address"
            onChange={handleChange}
          />
          <InputData
            type="text"
            text="Precio:"
            name="price"
            onChange={handleChange}
          />
          <InputData
            type="text"
            text="Tipo de habitacion:"
            name="roomtype"
            onChange={handleChange}
          />
          <InputData
            type="tel"
            text="Numero de telefono:"
            name="phoneNumber"
            onChange={handleChange}
          />
          <InputData
            type="file"
            text="Foto:"
            name="photo"
            onChange={handleChange}
          />
          <div className={style.input_data}>
            <label>Departamentos</label>
            <select name="" id="">
              <option value="1">1</option>
              {departaments?.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Registrar</button>
        </form>
      </section>
    </>
  );
};
