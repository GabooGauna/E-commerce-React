import React from "react";
import { useCartContext } from "../../context/CartContextProvider";

const CartItem = ({ item }) => {
  const { deleteById } = useCartContext();
  console.log(item);
  return (
    <div
      className="card m-auto mt-5 mb-5 p-0 shadow-lg col-4"
      style={{ width: "18rem" }}
    >
      <img
        className="card-img-top"
        src={item.thumbnailUrl}
        alt="Card image cap"
      />
      <div className="card-body card-bg ">
        <h6 className="card-title text-center">{item.title}</h6>
        <p className="card-text text-center p-carta">{item.quantity}</p>
      </div>
      <button className="boton" onClick={() => deleteById(item.id)}>
        Eliminar
      </button>
    </div>
  );
};

export default CartItem;
