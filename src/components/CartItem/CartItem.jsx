import React from "react";
import { useCartContext } from "../../context/CartContextProvider";

const CartItem = ({ item }) => {
  const { deleteById } = useCartContext();
  console.log(item);
  return (
    <div>
      <h1 className="text-dark">{item.name}</h1>
      <h4 className="text-dark">Unidades: {item.quantity}</h4>
      <button onClick={() => deleteById(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
