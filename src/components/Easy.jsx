import ProgressBar from "./ProgressBar";
import styles from '../styles/Easy.module.css';
import React, { useState, useRef, useEffect } from 'react';

const circles = [
  {
    value: 100,
    maxValue: 100,
    size: 70,
    strokeWidth: 5,
    number: 1,
    text: 'Cadastre-se'
  },
  {
    value: 100,
    maxValue: 100,
    size: 70,
    strokeWidth: 5,
    number: 2,
    text: 'Coloque seus imóveis para parceria 50/50'
  },
  {
    value: 100,
    maxValue: 100,
    size: 70,
    strokeWidth: 5,
    number: 3,
    text: 'Receba propostas'
  },
  {
    value: 100,
    maxValue: 100,
    size: 70,
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
      <div className={styles.teste}>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Easy = () => {
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
      </div>
    </section>
  )
}

export default Easy;
