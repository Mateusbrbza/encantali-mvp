import React from 'react';
import styles from './footer.module.scss';
import {AiOutlineInstagram, AiOutlineFacebook} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <Image
      src={FooterLogo}
      alt="encantali site logo"
      className={styles.icon}
      grid-area="one"
      /> */}
      <a className={styles.icon} href='/'>Encantali</a>
      <span className={styles.text} grid-area="two">
        Email: encantali@gmail.com <br />
        WhatsApp: +55 48 99999-9999
      </span>
      <span className={styles["mateus-text"]} grid-area="three">
        Feito por Mateus Barboza 2023.
      </span>
      <div className={styles["social-links"]} grid-area="four">
        <Link to={'https://www.instagram.com/use.encantali/'}>
          <AiOutlineInstagram />
        </Link>
        <Link to={'https://www.facebook.com/use.encantali'}>
          <AiOutlineFacebook />
        </Link>
      </div>
    </footer>
  )
}

export default Footer