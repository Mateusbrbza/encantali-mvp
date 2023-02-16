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
  }, [fetchProducts]);

  // console.log(data);

  // destructure product

  return (
    <div className={styles.cardbox}>
      <div>
        {/* image */}
          <img src={image} alt="produto" />
        {/* buttons */}
        <div>
          <button className={styles.button}>
            <div>
              <BsPlus className={styles.icon} />
            </div>
          </button>
          <Link to={`/products/${id}`} >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category & title & price */}
      <div>
        <span>{category}</span>
        <Link to={`/products/${id}`} >
          <h2>{title}</h2>
        </Link>
        <p>$ {price}</p>
      </div>
    </div>
  )
}

export default Products;