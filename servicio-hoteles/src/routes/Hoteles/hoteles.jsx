import { useState, useEffect } from "react";
import axios from "axios";
import Hotel from "../../components/hotel/hotel.jsx";
import style from "./hoteles.module.css";

export const Hoteles = ({ domain }) => {
  const [data, setData] = useState([]);

  const getHotels = async () => {
    const { data } = await axios.get(`${domain}/api/hotels`);
    return data;
  };

  const deleteData = async () => {
    const { data } = await axios.delete(`${domain}/api/hotels`);
    return data;
  };

  useEffect(() => {
    getHotels().then(({ data }) => setData(data));
  }, []);

  console.log(data);

  return (
    <>
      <section className={style.section_hotels}>
        <h1>Hoteles Registrados</h1>
        <div className={style.hotels}>
          {data?.map((el) => {
            // Muestra la ruta de la imagen en consola
            console.log(el.photos[0]);
            return (
              <Hotel
                key={el.id}
                el={el}
                domain={domain}
                deleteData={deleteData}
                // setDataToEdit={editData}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
