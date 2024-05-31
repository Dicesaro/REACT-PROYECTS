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

  useEffect(() => {
    getHotels().then(({ data }) => setData(data));
  }, []);

  console.log(data);

  return (
    <>
      <section className={style.div_hotels}>
        <div>
          {data?.map((el) => (
            <Hotel
              key={el.id}
              el={el}
              domain={domain}
              // setDataToEdit={editData}
              // deleteData={deleteData}
            />
          ))}
        </div>
      </section>
    </>
  );
};
