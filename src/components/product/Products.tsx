import React, {useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {BsEyeFill} from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr'
import styles from "./products.module.scss";

//contexts
import { ProductContext, Product } from '../../contexts/ProductContext';
import { CartContext } from '../../contexts/CartContext';


const Products = ({ product }: { product: Product }) => {
  // contexts
  const { fetchProducts } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // destructured product
  const { id, image, category, title, price } = product;

  useEffect(() => {
    // call fetchProducts when the component mounts to update the product list
    fetchProducts(); 
  }, []);

  // console.log(data);

  // destructure product

  return (
    <div className={styles.cardbox}>
      <div className={styles.contents}>
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
        <Link to={`/product/${id}`} >
          <h2>{title}</h2>
        </Link>
        <p>R$ {price}</p>
      </div>

      <div className={styles.bottom}>
        <button className={styles.button}
        onClick={() => addToCart(product)}
        >
          <div className={styles.icon}>
            <span>Adicionar ao carrinho +</span>
          </div>
        </button>
        
        <Link to={`/product/${id}`} className={styles.eye} >
          <BsEyeFill />
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Products;