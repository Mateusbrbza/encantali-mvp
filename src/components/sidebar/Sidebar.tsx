import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
import styles from './Sidebar.module.scss';

import CartItem from '../cart-item/CartItem';
import {BsBag} from 'react-icons/bs';


//contexts
import { SidebarContext } from '../../contexts/SidebarContext';
import { CartContext } from '../../contexts/CartContext'; 

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);

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
            <p>Carrinho (0)</p>
          </button>
        </div>
        
        {isOpen && (
          <div className={styles.sidebar}>
            <div className={styles["close-btn"]} onClick={handleClose}>
              {/* sidebar closed */}
              <button className={styles.button}>
                <span>Itens no carrinho (0) </span>
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
            </div>
        )}
    </section>
  );
};

export default Sidebar;