import React from "react";
import "./CartWidget.css";
import { useCartContext } from "../../context/CartContextProvider";

function CartWidget() {
  const { totalCount } = useCartContext();
  return (
    <>
      <ion-icon name="cart-outline"></ion-icon>
      <span className="units">{totalCount()}</span>
    </>
  );
}

export default CartWidget;
