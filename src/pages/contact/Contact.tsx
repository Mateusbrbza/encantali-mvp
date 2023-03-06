import React from 'react';

import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.section}>
      <Header />

      <div className={styles.contact}>Contact</div>
      
      <Footer />
    </section>
  )
}

export default Contact