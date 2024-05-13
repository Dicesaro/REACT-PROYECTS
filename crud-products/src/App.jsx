import React, { useEffect, useState } from "react";
import { FormProduct } from "./components/Form/FormProduct.jsx";
import { ListProduct } from "./components/ListProduct/ListProduct.jsx";

export default function App() {
  const [dataToEdit, setDataToEdit] = useState(null);
  const [product, setProduct] = useState(() => {
    const saveProducts = window.localStorage.getItem("products");
    if (saveProducts) {
      return JSON.parse(saveProducts);
    } else {
      return [];
    }
  });

  useEffect(() => {
    window.localStorage.setItem("products", JSON.stringify(product));
  }, [product]);

  const createData = (data) => {
    setProduct([...product, data]);
  };
  const updateData = (data) => {
    let newData = product.map((el) => (el.name === data.name ? data : el));
    setProduct(newData);
  };
  const deleteData = (name) => {
    let isDelete = window.confirm(
      `¿Esta seguro de eliminar el producto ${name}?`
    );

    if (isDelete) {
      let newData = product.filter((el) => el.name !== name);
      setProduct(newData);
    }
  };

  return (
    <>
      <FormProduct
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <ListProduct
        data={product}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </>
  );
}
