import React, {createContext, ReactNode, useState, useEffect} from 'react';

export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    }

export const ProductContext = createContext<{
    products: Product[];
    selectedProduct: Product | null;
    updateSelectedProduct: (product: Product) => void;
    fetchProducts: () => Promise<Product[]>;
  }>({
    products: [],
    selectedProduct: null,
    updateSelectedProduct: () => {},
    fetchProducts: () => Promise.resolve([]),
  });
interface Props {
  children: ReactNode;
}

// products provider 
export const ProductProvider = ({ children }: Props) => {
  // products state
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  //fetch products
  const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('failed to fetch products');
    }
    const data = await response.json();
    setProducts(data);
    return data as Product[];
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const contextValue = {
    products,
    selectedProduct: null,
    updateSelectedProduct: (product: Product) => {
      setSelectedProduct(product);
    },
    fetchProducts,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

// feat: build product context