import React, {useContext, ReactNode} from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';
import { ProductContext, Product } from '../../contexts/ProductContext';


const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  // get only mens & woman clothing category
  const filteredProducts: Product[] = products.filter((item: Product) => {
    return item.category === "men's clothing" || item.category === "women's clothing";
  });

  return (
    <>
    <Header />

    <div>Home</div>
    <Sidebar />
    <Footer />
    </>
  )
}

export default Home