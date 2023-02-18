import React, {createContext, useState, useEffect } from 'react';

type CartContextType = {
  addToCart: () => void;
};

// create context
export const CartContext = createContext<CartContextType>({ addToCart: () => {} });

const CartProvider = ({children}) => {
  //cart state
  const [cart, setCart] = useState([]);
  //add to cart
  const addToCart = () => {
    console.log('added to the cart')
  };

  return (
    <CartContext.Provider value={{addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;

