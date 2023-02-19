import React from 'react';
import { Link } from 'react-router-dom';
import { CartItemType } from '../../contexts/CartContext';
import styles from './CartItem.module.scss';

interface Props {
  item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  //destructure item
  const {id, title, image, price, amount} = item;

  return (
    <div className={styles.Cart}>
      <div className={styles.card}>
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className={styles.image} src={image} alt={title} />
        </Link>
      </div>
    </div>
  )
}

export default CartItem;