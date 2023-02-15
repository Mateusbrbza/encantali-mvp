import React, {createContext, ReactNode, useState, useEffect} from 'react';

export const ProductContext = createContext<any>(null);

// products props
interface Props {
  children: ReactNode;
}

// products provider 
const ProductProvider = ({ children }: Props) => {
  const contextValue = {
    products: [8],
    selectedProduct: {},
    updateSelectedProduct: () => {},
  }

  // products state
  const [products, setProducts] = useState([]);

  //fetch products
  useEffect(() => {
    interface Product {
    id: number;
    name: string;
    price: number;
    }

    const fetchProducts = async (): Promise<Product[]> => {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error('failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      return data as Product[];
    };
    fetchProducts();
  });

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;