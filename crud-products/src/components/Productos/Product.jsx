import "./Product.css";
const Product = ({ el, setDataToEdit, deleteData }) => {
  let { name, description, stock } = el;

  return (
    <>
      <div className="info">
        <p>{name}</p>
        <p>{description}</p>
        <p>{stock}</p>
        <div className="btn-options">
          <button className="btn-edit" onClick={() => setDataToEdit(el)}>
            Editar 📝
          </button>
          <button className="btn-delete" onClick={() => deleteData(name)}>
            Eliminar ✖️
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
