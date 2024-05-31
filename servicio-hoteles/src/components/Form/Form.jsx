import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import style from "./form.module.css";

const initialForm = {
  name: "",
  email: "",
  address: "",
  price: "",
  roomType: "",
  phoneNumber: "",
  photo: "",
  department_id: "",
};

const domain = "http://127.0.0.1:8000";
const defaultImageURL =
  "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg";

const getDepartments = async () => {
  const { data } = await axios.get(`${domain}/api/departments`);
  console.log(data);
  return data;
};

const InputData = ({ text, type, onChange, name, value, error }) => {
  return (
    <div className={style.input_data}>
      <label>{text}</label>
      <input
        id={name}
        type={type}
        onChange={onChange}
        name={name}
        value={value}
        className={error ? style.error : value ? style.valid : ""}
      />
      {error && <span className={style.error}>{error}</span>}
    </div>
  );
};

export default function Form({ onSubmit, data, errors, setErrors }) {
  const [formData, setFormData] = useState(data || initialForm);
  const [imageURL, setImageURL] = useState(defaultImageURL);
  const [departaments, setDepartments] = useState([]);

  useEffect(() => {
    getDepartments().then((data) => setDepartments(data));
  }, []);

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleChange = async (e) => {
    const { id, value } = e.target;
    if (value) {
      setErrors({
        ...errors,
        [id]: "",
      });
    }
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleChangeFile = async (e) => {
    const { id, files } = e.target;
    if (files.length > 0) {
      setErrors({ ...errors, [id]: "" });
    }
    const file = files[0];
    const base64 = await fileToBase64(file);
    setImageURL(base64);
    setFormData({
      ...formData,
      [id]: base64,
    });
  };
  const handleReset = () => {
    setFormData(initialForm);
    setImageURL(defaultImageURL);
    setErrors({});
  };
  return (
    <>
      <form
        onSubmit={(e) => onSubmit(e, formData)}
        className={style.form_hoteles}
      >
        <InputData
          type="text"
          name="name"
          text="Nombre:"
          onChange={handleChange}
          error={errors.name}
          value={formData.name}
        />
        <InputData
          type="email"
          name="email"
          text="Correo:"
          onChange={handleChange}
          error={errors.email}
          value={formData.email}
        />
        <InputData
          type="text"
          name="address"
          text="Direccion:"
          onChange={handleChange}
          error={errors.address}
          value={formData.address}
        />
        <InputData
          type="number"
          name="price"
          text="Precio:"
          onChange={handleChange}
          error={errors.price}
          value={formData.price}
        />
        <InputData
          type="text"
          name="roomType"
          text="Tipo de habitacion:"
          onChange={handleChange}
          error={errors.roomType}
          value={formData.roomType}
        />
        <InputData
          type="tel"
          name="phoneNumber"
          text="Numero de telefono:"
          onChange={handleChange}
          error={errors.phoneNumber}
          value={formData.phoneNumber}
        />
        <InputData
          type="file"
          name="photo"
          text="Foto:"
          onChange={handleChangeFile}
          error={errors.photo}
          // value={formData.photo}
        />

        {imageURL && (
          <img
            className={style.prev_image}
            src={imageURL || defaultImageURL}
            alt="Imagen"
          />
        )}

        <div className={style.input_data}>
          <label>Departamentos</label>
          <select
            id="department_id"
            name="department_id"
            value={formData.department_id}
            onChange={handleChange}
          >
            <option value="1">Selecciona</option>
            {departaments?.map((department) => (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            ))}
          </select>
        </div>
        <button>Registrar</button>
        <button type="reset" onClick={handleReset}>
          Resetear
        </button>
      </form>
    </>
  );
}
