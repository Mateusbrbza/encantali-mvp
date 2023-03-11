import React, {useContext} from 'react';
import styles from './CartItem.module.scss';
import { Link } from 'react-router-dom';

import { CartItemType, CartContext } from '../../contexts/CartContext';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Product } from '../../contexts/ProductContext';

interface Props {
  item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const {id, title, image, price, amount} = item;
  const { removeFromCart, addToCart, removeProduct } = useContext(CartContext);

  const product: Product = {
    id,
    title,
    image,
    price,
    category: '',
    description: '',
  };

  return (
    <div className={styles.cartItem}>
      <Link to={`/product/${id}`} className={styles.cartItemImage}>
        <img src={image} alt={title} />
      </Link>

      <div className={styles.cartItemContent}>
        <Link to={`/product/${id}`} className={styles.cartItemTitle}>
          {title}
        </Link>

        <div className={styles.cartItemActions}>
          <div className={styles.cartItemAmount}>
            <button
              className={styles.cartItemAmountButton}
              onClick={() => removeFromCart(item)}
            >
              <IoMdRemove />
            </button>
            <span>{amount}</span>
            <button
              className={styles.cartItemAmountButton}
              onClick={() => addToCart(product)}
            >
              <IoMdAdd />
            </button>
          </div>

          <div className={styles.cartItemPrice}>
            <span>R$ {price}</span>
          </div>

          <div className={styles.cartItemRemove}>
            <button
              className={styles.cartItemRemoveButton}
              onClick={() => removeProduct(product)}
            >
              <IoMdClose />
            </button>
          </div>
        </div>

        <div className={styles.cartItemTotal}>
          <span>Total: R$ {price * amount}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;