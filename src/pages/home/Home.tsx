import React, {useContext} from 'react';
import Header from '../../components/header/Header';
import Hero from '../../components/hero/Hero';
import Footer from '../../components/footer/Footer';
import { ProductContext, Product } from '../../contexts/ProductContext';
import styles from "./Home.module.scss";
import Products from '../../components/product/Products';

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
      <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.hero}>
              <Hero />
            </div>
            <div className={styles.row}>
              {filteredProducts.map((product: Product) => {
                return (
                  <div className={styles.card}>
                    <Products product={product} key={product.id} />
                  </div>
                )
              })
              }
            </div>
          </div>
      </section>
    <Footer />
    </>
  )
}

export default Home;