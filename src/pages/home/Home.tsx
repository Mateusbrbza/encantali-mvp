import React, {useContext} from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Sidebar from '../../components/sidebar/Sidebar';
import { ProductContext, Product } from '../../contexts/ProductContext';
import styles from "./Home.module.scss";


const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  // get only mens & woman clothing category
  const filteredProducts: Product[] = products.filter((item: Product) => {
    return ( item.category === "men's clothing" 
      || item.category === "women's clothing" 
      );
  });

  return (
    <>
    <Header />

    <div>
      <section>
        <div>
          <div>
            {filteredProducts.map((product: Product) => {
              return <div key={product.id}>{product.title}</div>
            })
            }
          </div>
        </div>
      </section>
    </div>

    <Sidebar />
    <Footer />
    </>
  )
}

export default Home