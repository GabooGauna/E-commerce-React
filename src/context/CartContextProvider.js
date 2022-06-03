import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCartContext = ()=> useContext(CartContext);

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => {
        return cartList.some(item => item.id === id);
    };

  const addToCart = (item, quantity) => {
    if(isInCart(item.id)) {
      return setCartList(
      cartList.map((product) => product.id === item.id ? {...item, quantity: product.quantity + quantity} : product)
      );
    }

      setCartList([...cartList, {...item, quantity}]);
    };

  const emptyCart = () => {
    setCartList([])};

  const deleteById = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
  };

  const totalCount = () => {
    return cartList.reduce((total, item) => total + item.quantity, 0);
  };

  const totalPrice = () => {
    return cartList.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const unitsPerProduct = (id) => {
    return cartList.find((item) => item.id === id).quantity;
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart ,emptyCart ,deleteById ,totalCount ,totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider