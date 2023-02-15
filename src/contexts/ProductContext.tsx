import React, {createContext, ReactNode, useState, useEffect} from 'react';

export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    }

export const ProductContext = createContext<any>(null);
// products props
interface Props {
  children: ReactNode;
}

// products provider 
const ProductProvider = ({ children }: Props) => {
  // products state
  const [products, setProducts] = useState<Product[]>([]);

  //fetch products
  useEffect(() => {

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
  }, []);

  const contextValue = {
    products,
    selectedProduct: {},
    updateSelectedProduct: () => {},
  }

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

// feat: build product context