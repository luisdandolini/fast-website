import React, { useEffect, useState, useRef, useCallback } from 'react';
import styles from '../styles/ProgressBar.module.css';

const CircularProgressBar = ({ value, maxValue, size, strokeWidth, number, isLast }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [currentValue, setCurrentValue] = useState(0);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const progressBarRef = useRef(null);

  const animateProgressBar = useCallback(() => {
    const duration = 1000; // Duração da animação em milissegundos
    const intervalDuration = 10; // Duração do intervalo em milissegundos
    const increment = (value / (duration / intervalDuration));

    const intervalId = setInterval(() => {
      setCurrentValue((prevValue) => {
        const newValue = prevValue + increment;
        return newValue <= value ? newValue : value;
      });

      if (currentValue >= value) {
        clearInterval(intervalId);
      }
    }, intervalDuration);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentValue, value]);

  useEffect(() => {
    const currentProgressBar = progressBarRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationTriggered) {
          setAnimationTriggered(true);
          animateProgressBar();
        }
      },
      { threshold: 1 }
    );

    if (currentProgressBar) {
      observer.observe(currentProgressBar);
    }

    return () => {
      if (currentProgressBar) {
        observer.unobserve(currentProgressBar);
      }
    };
  }, [animationTriggered, animateProgressBar]);

  const progress = ((currentValue / maxValue) * 100) * (circumference / 100);
  

  return (
    <div className={styles.circularProgressBar} ref={progressBarRef}>
      <svg
        className={styles.circularProgressBarSvg}
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <g transform={`rotate(-90, ${size / 2}, ${size / 2})`}>
          <circle
            className={styles.circularProgressBarBackground}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <circle
            className={styles.circularProgressBarProgress}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={circumference - progress}
          />
        </g>
        <text
          className={styles.circularProgressBarText}
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="32"
        >
          {number}
        </text>
      </svg>
      {!isLast && <div className={styles.dottedLine}></div>}
    </div>
  );
};

export default CircularProgressBar;
