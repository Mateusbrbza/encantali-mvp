import React, {createContext, useState, ReactNode } from 'react';
import { Product } from './ProductContext';

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
};

type CartContextType = {
  cart: CartItemType[];
  addToCart: (product: Product) => void;
};

interface Props {
  children: ReactNode;
}

// create context
export const CartContext = createContext<CartContextType>({
  cart: [], 
  addToCart: () => {} 
});

const CartProvider = ({children}: Props) => {

  //cart state
  const [cart, setCart] = useState<CartItemType[]>([]);

  //add to cart
  const addToCart = (product: Product) => {
    const { id, title, price, image } = product;
    const newItem = { id, title, price, image, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);

    // if cart item is already in the cart
    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  
  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;

