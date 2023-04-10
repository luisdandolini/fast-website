import ProgressBar from "./ProgressBar";
import styles from '../styles/Easy.module.css';
import React, { useState, useRef, useEffect } from 'react';

const circles = [
  {
    value: 100,
    maxValue: 100,
    size: 100,
    strokeWidth: 5,
    number: 1,
    text: 'Cadastre-se'
  },
  {
    value: 100,
    maxValue: 100,
    size: 100,
    strokeWidth: 5,
    number: 2,
    text: 'Coloque seus imóveis para parceria 50/50'
  },
  {
    value: 100,
    maxValue: 100,
    size: 100,
    strokeWidth: 5,
    number: 3,
    text: 'Receba propostas'
  },
  {
    value: 100,
    maxValue: 100,
    size: 100,
    strokeWidth: 5,
    number: 4,
    isLast: true,
    text: 'Ganhe comissão na venda!'
  }
];

const Circle = ({ value, maxValue, size, strokeWidth, number, isLast, text, onProgress, isActive }) => {
  return (
    <div className={styles.circle}>
      <ProgressBar {...{ value, maxValue, size, strokeWidth, number, isLast, onProgress, isActive }} />
      <span>{text}</span>
    </div>
  );
};

const Easy = () => {
  const [currentImage, setCurrentImage] = useState("/cadastre.png");
  const [completedStep, setCompletedStep] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef(null)

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setSectionVisible(true);
      } else {
        setSectionVisible(false);
      }
    });

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const handleProgress = (completedStep) => {
    const images = [
      "/venda.png",
      "/imovel.png",
      "/cadastre.png",
      "/cadastre.png",
    ];

    setCurrentImage(images[completedStep]);
    setCompletedStep(completedStep + 1);
  };

  return(
    <section className={styles.bg_desktop} ref={sectionRef}>
      <h2 className={styles.title}>Veja como é fácil</h2>
      <div className={styles.container_easy}>
        <div className={styles.container}>
          {circles.map((circle, index) => (
            <Circle
              key={circle.number}
              {...circle}
              isActive={index === completedStep && sectionVisible}
              onProgress={() => handleProgress(index)}
            />
          ))}
        </div>
        <img src={currentImage} alt="" />
      </div>
      <div className={styles.bureaucracy}>
        <div className={styles.container_bureaucracy}>
          <p className={styles.bureaucracy_title}>Sem burocracia</p>
          <p className={styles.bureaucracy_subtitle}><span>Sem necessidade de exclusividade</span> somente autorização de venda do proprietrário</p>
        </div>
        <div className={styles.details}></div>
      </div>
    </section>
  )
}

export default Easy;
