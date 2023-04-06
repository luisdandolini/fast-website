import styles from '../styles/PremiumMobile.module.css';
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
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleContainerChange = (direction) => {
    if (direction === 'left') {
      setCurrentContainer((currentContainer % containersData.length) + 1);
    } else {
      setCurrentContainer(currentContainer === 1 ? containersData.length : currentContainer - 1);
    }
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 100) {
      handleContainerChange('left');
    } else if (touchStartX - touchEndX < -100) {
      handleContainerChange('right');
    }
  };

  return (
    <section className={styles.premium}>
      <h1 className={styles.title}>Motivos para ser Premium</h1>

      {containersData.map((container, index) => (
        <div
          key={index}
          className={currentContainer === index + 1 ? styles.container : styles.container_none}
          onTouchStart={handleTouchStart}
          onTouchMove={(event) => setTouchEndX(event.targetTouches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.bg} style={{ backgroundImage: `url(${container.backgroundUrl})` }}></div>
          <div className={styles.container_text}>
            <div className={styles.counter}>
              {containersData.map((_, index) => (
                <span
                  key={index}
                  className={currentContainer === index + 1 ? styles.active : ""}
                  onClick={() => handleContainerChange(index + 1)}
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
