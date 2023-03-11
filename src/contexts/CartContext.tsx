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
  removeFromCart: (item: CartItemType) => void;
  removeProduct: (product: Product) => void;
};

interface Props {
  children: ReactNode;
}

// create context
export const CartContext = createContext<CartContextType>({
  cart: [], 
  addToCart: () => {},
  removeFromCart: () => {},
  removeProduct: () => {}
});

  const CartProvider = ({children}: Props) => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  //add to cart and add amount on IoMdAdd
  const addToCart = (product: Product) => {
    const { id, title, price, image } = product;
    const newItem = { id, title, price, image, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  
  //remove from cart
  const removeFromCart = (item: CartItemType) => {
    setCart((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      
      if (existingItem && existingItem.amount === 1) {
        return prev.filter((i) => i.id !== item.id);
      } else if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, amount: i.amount - 1 } : i
        );
      } else {
        return prev;
      }
    });
  };

  // to be used on IoMdClose
  const removeProduct = (product: Product) => {
  setCart((prevCart) => {
    const itemIndex = prevCart.findIndex((item) => item.id === product.id);

    if (itemIndex === -1) {
      return prevCart;
    } else {
      const updatedCart = [...prevCart];
      updatedCart.splice(itemIndex, 1);
      return updatedCart;
    }
  });
};

  return (
    <CartContext.Provider 
    value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      removeProduct,
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;

