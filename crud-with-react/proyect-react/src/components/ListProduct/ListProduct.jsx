import Product from "../Productos/Product";
import "./ListProduct.css";
export const ListProduct = ({ data, setDataToEdit, deleteData }) => {
  return (
    <>
      <section>
        {data.map((el) => (
          <Product
            key={el.name}
            el={el}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        ))}
      </section>
    </>
  );
};
