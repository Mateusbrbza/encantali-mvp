import React, {useContext} from 'react';
import Sidebar from '../sidebar/Sidebar';
import { SidebarContext } from '../../contexts/SidebarContext';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const {isOpen, handleClose} = useContext(SidebarContext);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <a className={styles.icon} href='/'>Encantali</a>    

        <div className={styles.item}>
          {/* Home */}
          <a href='/'>Início</a>
        </div>

        <div className={styles.item}>
          {/* About */}
          <a href='/products'>Produtos</a>
        </div>

        <div className={styles.item}>
          {/* About */}
          <a href='/about'>Sobre nós</a>
        </div>

        <div className={styles.item}>
          {/* Contato */}
          <a href='/contact'>Contato</a>
        </div>

        <div className={styles.item}>
          {/* Contato */}
          <a href='/profile'>Perfil</a>
        </div>

        <div className={styles.item}>
          {/* Cart */}
          <Sidebar />
        </div>

      {isOpen}
      </nav>
    </header>
  );
};

export default Header;