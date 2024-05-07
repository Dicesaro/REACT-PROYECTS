import React, { useState, useEffect } from "react";
import "./FormProduct.css";

const initialForm = {
  name: "",
  description: "",
  stock: "",
};

export const FormProduct = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) => {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataToEdit) {
      updateData(form);
    } else {
      createData(form);
    }
    handleReset();
  };

  const handleReset = () => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>{dataToEdit ? "Editar producto" : "Añadir producto"}</h1>
        <label>Producto</label>
        <input
          type="text"
          name="name"
          placeholder="Producto..."
          onChange={handleChange}
          required
          value={form.name}
        />
        <label>Descripción</label>
        <input
          type="text"
          name="description"
          placeholder="Descripción..."
          onChange={handleChange}
          required
          value={form.description}
        />
        <label>Stock</label>
        <input
          type="number"
          name="stock"
          placeholder="Stock..."
          onChange={handleChange}
          required
          value={form.stock}
        />
        <div className="buttons">
          <button type="submit">Enviar</button>
          <button type="button" onClick={handleReset}>
            Limpiar
          </button>
        </div>
      </form>
    </>
  );
};
