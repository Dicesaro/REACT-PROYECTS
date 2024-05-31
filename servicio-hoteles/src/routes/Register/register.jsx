import axios from "axios";
import style from "./register.module.css";
import React, { useState } from "react";
import Form from "../../components/Form/Form";

const domain = "http://127.0.0.1:8000";

const postHotel = async (formData) => {
  const { data } = await axios.post(`${domain}/api/hotels`, formData);
  return data;
};

export const Register = ({}) => {
  const [errors, setErrors] = useState({});
  const validateForm = (formData) => {
    let errors = {};
    if (!formData.name) errors.name = "El nombre es requerido";
    if (!formData.email) errors.email = "El correo es requerido";
    if (!formData.address) errors.address = "La dirección es requerida";
    if (!formData.price) errors.price = "El precio es requerido";
    if (!formData.roomType)
      errors.roomType = "El tipo de habitación es requerido";
    if (!formData.phoneNumber)
      errors.phoneNumber = "El número de teléfono es requerido";
    return errors;
  };

  const handleSubmit = (e, formData) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      handleReset();
    } else {
      setErrors(errors);
    }
    const { photo, ...restData } = formData;
    postHotel({ ...restData, photos: [photo] }).then((data) => {
      console.log("Success", data);
    });
  };

  const handleReset = () => {
    setErrors({});
  };

  return (
    <>
      <section className={style.section_hoteles}>
        <h1>Registro de Hotel</h1>
        <Form onSubmit={handleSubmit} errors={errors} setErrors={setErrors} />
        {/* <form onSubmit={handleSubmit} className={style.form_hoteles}>
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
            name="roomtype"
            text="Tipo de habitacion:"
            onChange={handleChange}
            error={errors.roomtype}
            value={formData.roomtype}
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
              name="departments"
              value={formData.departments}
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
        </form> */}
      </section>
    </>
  );
};
