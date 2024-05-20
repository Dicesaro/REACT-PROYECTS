import style from "./hotel.module.css";

const Hotel = ({ el, setDataToEdit, deleteData }) => {
  let {
    name,
    email,
    address,
    price,
    roomtype,
    photo,
    phoneNumber,
    departments,
  } = el;
  return (
    <>
      <div className={style.comp_hotel}>
        <div>{photo && <img src={photo} alt={name} />}</div>
        <div>
          <h3>{name}</h3>
          <p> Email: {email}</p>
          <p> Dirección: {address}</p>
          <p> Precio: S/.{price}</p>
          <p> Tipo de habitacion: {roomtype}</p>
          <p> Numero de telefono: {phoneNumber}</p>
          <p> Departamento: {departments}</p>
        </div>
        <div className={style.buttons}>
          <button onClick={() => setDataToEdit(el)}>Editar</button>
          <button onClick={() => deleteData(name)}>Eliminar</button>
        </div>
      </div>
    </>
  );
};

export default Hotel;
