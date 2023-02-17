import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from '../cart-item/CartItem';
import {BsBag} from 'react-icons/bs';
import { SidebarContext } from '../../contexts/SidebarContext';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  // Any additional props that you need
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const { isOpen, setIsOpen, handleClose } = useContext(SidebarContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className={styles.section}>

        <button className={styles["toggle-btn"]} onClick={handleToggle}>
        {/* sidebar-opn */}
        <BsBag className={styles.bag} />
        </button>
        {isOpen && (
            <div className={styles.sidebar}>
                <button className={styles["close-btn"]} onClick={handleClose}>
                    {/* sidebar closed */}
                    <BsBag className={styles.bag} />
                </button>
            </div>
        )}
        
      </section>
    </>
  );
};

export default Sidebar;