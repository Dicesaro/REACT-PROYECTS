import style from "./hotel.module.css";

const Hotel = ({ el, setDataToEdit, deleteData, domain }) => {
  let {
    id,
    name,
    email,
    address,
    price,
    roomtype,
    photos,
    phoneNumber,
    departments,
  } = el;

  return (
    <>
      <div key={id} className={style.comp_hotel}>
        <div>{photos && <img src={`${domain}${photos.uri}`} alt={name} />}</div>
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
          <button className={style.btn_edit} onClick={() => setDataToEdit(el)}>
            Editar
          </button>
          <button className={style.btn_delete} onClick={() => deleteData(name)}>
            Eliminar
          </button>
        </div>
      </div>
    </>
  );
};

export default Hotel;
