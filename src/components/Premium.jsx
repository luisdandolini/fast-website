import styles from '../styles/Premium.module.css';
import { useState } from 'react';

const containersData = [
  {
    title: 'Mais produtos na carteira',
    text: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt',
    backgroundUrl: '/banner_venda.jpg',
  },
  {
    title: 'Mais benefícios para você',
    text: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt',
    backgroundUrl: '/banner_carteira.jpg',
  },
  {
    title: 'Mais benefícios para você5',
    text: 'Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt',
    backgroundUrl: '/banner_leads.jpg',
  },
];

const Premium = () => {
  const [currentContainer, setCurrentContainer] = useState(1);

  const handleContainerChange = () => {
    setCurrentContainer((currentContainer % containersData.length) + 1);
  };

  return (
    <section className={styles.premium}>
      <h1 className={styles.title}>Motivos para ser Premium</h1>

      {containersData.map((container, index) => (
        <div
          key={index}
          className={currentContainer === index + 1 ? styles.container : styles.container2}
        >
          <div className={styles.bg} style={{ backgroundImage: `url(${container.backgroundUrl})` }}></div>
          <div className={styles.container_text}>
            <div className={styles.counter}>
              {containersData.map((_, index) => (
                <span
                  key={index}
                  className={currentContainer === index + 1 ? styles.active : ""}
                  onClick={handleContainerChange}
                >
                </span>
              ))}
            </div>
            <h2>{container.title}</h2>
            <p>{container.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Premium;
