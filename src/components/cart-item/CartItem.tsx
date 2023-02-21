import React from 'react';
import styles from './CartItem.module.scss';

import { Link } from 'react-router-dom';
import { CartItemType } from '../../contexts/CartContext';
//icons
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';

interface Props {
  item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const {id, title, image, price, amount} = item;

  return (
    <div className={styles.cart}>
      <div className={styles.card}>
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className={styles.image} src={image} alt={title} />
        </Link>

        <div className={styles.text}>
          {/* remove icon */}
          <div className={styles.icon}>
            <IoMdClose className={styles.close} />
          </div>
          
          {/* title */}
          <div className={styles.description}>
            {/* titulo do item  */}
            <Link to={`/product/${id}`}>
              {title}
            </Link>

            {/* botoes + e - */}
            <div><IoMdRemove /></div>
            <div><IoMdAdd /></div>

            {/* quantidade */}
            <div>Qtd: {amount} </div>

            {/* precos */}
            <div>R$ {price}</div>

            {/* Total item */}
            <div>Total: {`R$ ${item.price * amount}`} </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem;