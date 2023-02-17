import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {BsPlus, BsEyeFill} from 'react-icons/bs';
import { ProductContext, Product } from '../../contexts/ProductContext';
import styles from "./products.module.scss";


const Products = ({ product }: { product: Product }) => {
  const { fetchProducts } = useContext(ProductContext);
  const { id, image, category, title, price } = product;

  useEffect(() => {
    // call fetchProducts when the component mounts to update the product list
    fetchProducts();
  }, []);

  // console.log(data);

  // destructure product

  return (
    <div className={styles.cardbox}>
      <div>
        <div className={styles.image}>
          {/* image */}
          <img src={image} alt="produto" />
        </div>
        {/* buttons */}
      </div>
      {/* category & title & price */}
      <div className={styles.info}>
        <span>{category}</span>
        <Link to={`/products/${id}`} >
          <h2>{title}</h2>
        </Link>
        <p>R$ {price}</p>
      </div>
      <div className={styles.bottom}>
        <button className={styles.button}>
          <div className={styles.icon}>
            <BsPlus />
          </div>
        </button>
        <Link to={`/products/${id}`} className={styles.eye} >
          <BsEyeFill />
        </Link>
      </div>
    </div>
  )
}

export default Products;