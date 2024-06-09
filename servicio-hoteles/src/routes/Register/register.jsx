import axios from "axios";
import style from "./register.module.css";
import React, { useState } from "react";
import Form from "../../components/Form/Form";
import toast, { Toaster } from "react-hot-toast";

const domain = "http://127.0.0.1:8000";

const messageOfSuccess = () => {
  toast.success("Registro exitoso", {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
};

const messageOfError = () => {
  toast.error("Error al registrar", {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
};

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
      console.log("Enviado");
      messageOfSuccess();
    } else {
      setErrors(errors);
      messageOfError();
    }
    const { photo, ...restData } = formData;
    postHotel({ ...restData, photos: [photo] }).then((data) => {
      console.log("Success", data);
    });
  };

  return (
    <>
      <section className={style.section_hoteles}>
        <h1>Ingrese los datos de su hotel</h1>
        <Form onSubmit={handleSubmit} errors={errors} setErrors={setErrors} />
        <Toaster />
      </section>
    </>
  );
};
