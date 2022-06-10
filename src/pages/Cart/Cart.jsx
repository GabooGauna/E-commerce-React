import React from "react";
import "./Cart.css";
import CartItem from "../../components/CartItem/CartItem";
import { useCartContext } from "../../context/CartContextProvider";
import {
  collection,
  addDoc,
  getFirestore,
  Timestamp,
} from "firebase/firestore";

function Cart() {
  const { cartList, emptyCart, totalPrice } = useCartContext();
  const finalizarCompra = async () => {
    const db = getFirestore();
    const docRef = await addDoc(collection(db, "orders"), {
      buyer: {
        name: "Francisco de los Santos",
        phone: 3143324234,
        emal: "franchu@hotmail.com",
      },
      items: cartList.map((item) => ({
        title: item.title,
        price: item.precio,
        id: item.id,
      })),
      date: Timestamp.fromDate(new Date()),
      total: totalPrice(),
    });
    alert("Tu orden fue enviada con éxito");
  };
  return (
    <div className="row cartcontainer">
      {cartList.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      {cartList.length > 0 ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h4 className="precio-title">Precio total: ${totalPrice()}</h4>
          <button
            className="btn-primary btn-lg mt-3 mb-3"
            onClick={() => emptyCart()}
          >
            Vaciar Carrito
          </button>
        </div>
      ) : (
        <h1>El Carrito está vacio</h1>
      )}
      <div className="d-flex flex-column justify-content-center align-items-center">
        <button
          className="btn-primary btn-lg mt-3 mb-3"
          onClick={finalizarCompra}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default Cart;
