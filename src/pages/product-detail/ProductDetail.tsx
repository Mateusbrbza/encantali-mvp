import React, { useContext } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { ProductContext } from '../../contexts/ProductContext';
import styles from './ProductDetail.module.scss';
import {FiShoppingCart} from 'react-icons/fi'

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
  if (!product) {
    return (
      <section className={styles["product-not-found"]}>
        Carregando...
      </section>
    )
  };
  const {title, price, description, image} = product;

  return (
      <>
      <Header />

      <section className={styles.section}>
        <div className={styles.container}>

          <div className={styles["product-wrapper"]}>
            <div className={styles.image}>
              <img src={image} alt='' />
            </div>

            <div className={styles.text}>
              <h1>
                {title}
              </h1>
              <h2 className={styles.price}>
                R$ {price}
              </h2>
              <p>{description}</p>
              <button
              onClick={() => addToCart(product)}
              >
                Adicionar produto ao carrinho <FiShoppingCart/>
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      </>
    )
}

export default ProductDetail;