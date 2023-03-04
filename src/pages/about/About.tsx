import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import styles from './about.module.scss';
import logo from '/encantali-owners.jpeg';

const About = () => {
  const getAboutPageText = () => {
    if (window.innerWidth < 920) {
      return (
        <>
          <p>
            A Encantali foi pensada por duas irmãs, decidimos trabalhar com
            algo que gostamos e compartilhar isso com outras pessoas.
          </p>
          <p>
            Estamos aqui para oferecer acessórios lindos, de qualidade e um
            atendimento especial para vocês!
          </p>
          <p>
            A Thamires é a irmã mais nova da Encantali, tem 20 anos.
            Adora semijóias e fotografia, e vai utilizar todo o seu
            talento pra dar vida as nossas idéias e cuidar do nosso 
            estoque com muito amor.
          </p>
          <p>
            A Thainá é a irmã mais velha e tem 22 anos. Após dar a luz
            ao pequeno Louis, que se tornou seu maior amor e a inspiração
            para tirar do papel o projeto de empreender com a Encantali.
          </p>
          <p>
            É apaixonada por semijóias! Vai atender vocês com muito carinho
            e fazer com que todas recebam seus pedidos bem lindos e cheirosos.
          </p>
        </>
      )
    }

    return (
      <>
        <p>
          A Encantali foi pensada por duas irmãs,
          <br />
          decidimos trabalhar com algo que gostamos
          <br />
          e compartilhar isso com outras pessoas.
        </p>
        <p>
          Estamos aqui para oferecer acessórios
          <br />
          lindos, de qualidade e um atendimento
          <br />
          especial para vocês!
        </p>
        <p>
          A Thamires é a irmã mais nova da Encantali,
          <br />
          tem 20 anos. Adora semijóias e fotografia,
          <br />
          e vai utilizar todo o seu talento pra dar vida
          <br />
          as nossas idéias e cuidar do nosso estoque
          <br />
          com muito amor.
        </p>
        <p>
          A Thainá é a irmã mais velha e tem 22 anos.
          <br />
          Após dar a luz ao pequeno Louis, que se
          <br />
          tornou seu maior amor e a inspiração para
          <br />
          tirar do papel o projeto de empreender com
          <br />
          a Encantali.
          <br />
          <br />
          É apaixonada por semijóias! Vai atender 
          <br />
          vocês com muito carinho e fazer com que
          <br />
          todas recebam seus pedidos bem lindos
          <br />
          e cheirosos.
        </p>
      </>
    )
  }

  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.flex__wrapper}>
          <div className={styles.about__image}>
            <img src={logo} alt='Thainá e Thamires' />
          </div>
          <div className={styles.about__text}>
              <div className={styles.text}>
                <h1>Quem somos?</h1>
                {getAboutPageText()}
              </div>
          </div>
        </div>
      </section>
      <Footer />
      </>
  )
}

export default About