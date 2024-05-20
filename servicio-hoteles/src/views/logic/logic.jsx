// import style from "./logic.module.css";
import React, { useState, useEffect } from "react";
import { Register } from "../../routes/Register/register";
import { Hoteles } from "../../routes/Hoteles/hoteles";

export default function Logic() {
  const [dataToEdit, setDataToEdit] = useState(null);
  const [hotel, setHotel] = useState(() => {
    const saveHotels = window.localStorage.getItem("hotels");
    if (saveHotels) {
      return JSON.parse(saveHotels);
    } else {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("hotels", JSON.stringify(hotel));
  }, [hotel]);

  const createData = (data) => {
    setHotel([...hotel, data]);
  };

  const updateData = (data) => {
    let newData = hotel.map((el) => (el.name === data.name ? data : el));
    setHotel(newData);
  };

  const deleteData = (name) => {
    let isDelete = window.confirm(`¿Está seguro de eliminar el hotel ${name}?`);
    if (isDelete) {
      let newData = hotel.filter((el) => el.name !== name);
      setHotel(newData);
    }
  };

  return (
    <>
      <Register
        dataToEdit={dataToEdit}
        createData={createData}
        updateData={updateData}
        setDataToEdit={setDataToEdit}
      />
      <Hoteles
        data={hotel}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </>
  );
}
