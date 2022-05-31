import React from "react";
import CartItem from "../../components/CartItem/CartItem";
import { useCartContext } from "../../context/CartContextProvider";

function Cart() {
  const { cartList, emptyCart, totalPrice } = useCartContext();
  return (
    <div>
      {cartList.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      {cartList.length > 0 ? (
        <>
          <button onClick={() => emptyCart()}>Vaciar Carrito</button>
          <h4>Precio total: ${totalPrice()}</h4>
        </>
      ) : (
        <h1>El Carrito está vacio</h1>
      )}
    </div>
  );
}

export default Cart;
