import styles from '../styles/PremiumMobile.module.css';
import { useState } from 'react';
import premium from '../data/premium'
import Icon from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';
import { mdiChevronLeft } from '@mdi/js';

const Premium = () => {
  const [currentContainer, setCurrentContainer] = useState(1);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleContainerChange = (direction) => {
    if (direction === 'left') {
      setCurrentContainer((currentContainer % premium.length) + 1);
    } else {
      setCurrentContainer(currentContainer === 1 ? premium.length : currentContainer - 1);
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

      {premium.map((container, index) => (
        <div
          key={index}
          className={currentContainer === index + 1 ? styles.container : styles.container_none}
          onTouchStart={handleTouchStart}
          onTouchMove={(event) => setTouchEndX(event.targetTouches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <div className={styles.bg} style={{ backgroundImage: `url(${container.backgroundUrl})` }}>
            <div className={styles.container_arrow_left} onClick={() => handleContainerChange('right')}><Icon path={mdiChevronLeft} size={1} className={styles.teste}/></div>
            <div className={styles.container_arrow_right} onClick={() => handleContainerChange('left')}><Icon path={mdiChevronRight} size={1} /></div>
          </div>
          <div className={styles.container_text}>
            <div className={styles.counter}>
              {premium.map((_, index) => (
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
