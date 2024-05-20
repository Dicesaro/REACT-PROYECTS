import Hotel from "../../views/hotel/hotel.jsx";
import style from "./hoteles.module.css";

export const Hoteles = ({ data, setDataToEdit, deleteData }) => {
  return (
    <>
      <section className={style.div_hotels}>
        <div>
          {data.map((el) => (
            <Hotel
              key={el.name}
              el={el}
              setDataToEdit={setDataToEdit}
              deleteData={deleteData}
            />
          ))}
        </div>
      </section>
    </>
  );
};
