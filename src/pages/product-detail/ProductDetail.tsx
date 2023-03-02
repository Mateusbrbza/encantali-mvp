import React, { useContext } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContext';
import styles from './ProductDetail.module.scss';

// page that will show the selected product from homepage and show it on this component
const ProductDetail = () => {
  // getting product id 
  const { id } = useParams<{ id: string }>();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  // get the single product based on the id
  const product = products.find(item => {
    return item.id === parseInt(id);
  });
  // product not found
  if (!product) {
    return (
      <section className={styles["product-not-found"]}>
        Carregando...
      </section>
    )
  };
  console.log(product);

  // destructure the product

  return (
      <>
      <Header />

      <section className={styles.section}>
        <div>
          Detalhes do produto
        </div>
      </section>
      
      <Footer />
      </>
    )
}

export default ProductDetail;