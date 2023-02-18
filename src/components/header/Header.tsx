import React, {useContext} from 'react';
import Sidebar from '../sidebar/Sidebar';
import { SidebarContext } from '../../contexts/SidebarContext';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const {isOpen, handleClose} = useContext(SidebarContext);

  return (
    <header className={styles.navbar}>
      <div className={styles.header}>
        Header
      </div>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      {/* {isOpen && <Sidebar />} */}
    </header>
  );
};

export default Header;