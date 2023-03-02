import React from 'react';
import styles from './footer.module.scss';
import {AiOutlineInstagram, AiOutlineFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a className={styles.icon} href='/'>Encantali</a>
      <span className={styles.text} grid-area="two">
        Email: encantali@gmail.com <br />
        WhatsApp: +55 48 99999-9999
      </span>
      <span className={styles["mateus-text"]} grid-area="three">
        Feito por Mateus Barboza. 2023.
      </span>
      <div className={styles["social-links"]} grid-area="four">
        <a href='https://www.instagram.com/use.encantali/' 
        target="_blank" rel="noreferrer"
        >
          <AiOutlineInstagram />
        </a>
        <a href='https://www.facebook.com/use.encantali' 
        target="_blank" rel="noreferrer"
        >
          <AiOutlineFacebook />
        </a>
      </div>
    </footer>
  )
}

export default Footer