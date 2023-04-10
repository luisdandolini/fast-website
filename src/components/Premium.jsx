import React, { useState, useEffect } from 'react';
import styles from '../styles/Premium.module.css';
import { useMediaQuery } from "react-responsive";
import PremiumMobile from './PremiumMobile';
import reasons from '../data/reasons';

const images = [
  '/banner_carteira.jpg',
  '/banner_venda.jpg',
  '/banner_leads.jpg',
];

const Premium = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentImageIndex(index);
  };

  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  if (isMobile) {
    return <PremiumMobile />;
  }

  return (
    <section>
      <h1 className={styles.title}>Motivos para ser Premium</h1>

      <div className={styles.container_premium}>
        <div className={styles.bg} style={{ backgroundImage: `url(${images[currentImageIndex]})` }}></div>

        <div className={styles.content_premium}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.container_content}>
              <div className={currentImageIndex === index ? styles.detail : ''}></div>
              <div className={styles.container} onClick={() => handleClick(index)}>
                <h2>{reason.title}</h2>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Premium;
