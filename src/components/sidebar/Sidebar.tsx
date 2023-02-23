import React, { useContext } from 'react';
import styles from './Sidebar.module.scss';
import CartItem from '../cart-item/CartItem';
import {BsBag} from 'react-icons/bs';

//contexts
import { SidebarContext } from '../../contexts/SidebarContext';
import { CartContext, CartItemType  } from '../../contexts/CartContext'; 

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total: number, item: CartItemType) => total + item.price * item.amount,
    0
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={styles.section}>
        <div className={styles["toggle-btn"]} onClick={handleToggle}>
        {/* sidebar-opn */}
          <button className={styles.button}>
            <div className={styles.icon}>
              <BsBag />
            </div>
            <p>Carrinho ({cart.length})</p>
          </button>
        </div>
        
        {isOpen && (
          <div className={styles.sidebar}>
            <div className={styles["close-btn"]} onClick={handleClose}>
              {/* sidebar closed */}
              <button className={styles.button}>
                <span>Itens no carrinho ({cart.length}) </span>
                <div className={styles.icon}>
                  <BsBag className={styles['sidebar-close']} />
                </div>
              </button>
            </div>
            <div>
              {cart.map((item) => {
                return <CartItem item={item} key={item.id} />
              })}
            </div>
            <div>
              <div className={styles.cartInfo}>
                {/* total */}
                <div className={styles.cartTotal}>
                  <span>Total: R$ {totalPrice.toFixed(0)}</span>
                </div>
                {/* finalizar compra */}
                <div>
                  <span>Finalizar compra</span>
                </div>
              </div>
            </div>
          </div>
        )}
    </section>
  );
};

export default Sidebar;