import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../cart-item/CartItem';
import {BsBag} from 'react-icons/bs';
import styles from './Sidebar.module.scss';

//contexts
import { SidebarContext } from '../../contexts/SidebarContext';
import { CartContext } from '../../contexts/CartContext'; 

interface SidebarProps {
  // Any additional props that you need
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);

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
          </button>
        </div>
        
        {isOpen && (
          <div className={styles.sidebar}>
            <div className={styles["close-btn"]} onClick={handleClose}>
              {/* sidebar closed */}
              <button className={styles.button}>
                <div className={styles.icon}>
                  <BsBag />
                </div>
              </button>
            </div>
            </div>
        )}
    </section>
  );
};

export default Sidebar;