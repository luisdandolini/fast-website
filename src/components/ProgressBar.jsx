import React, { useEffect, useState, useCallback } from 'react';
import styles from '../styles/ProgressBar.module.css';

const ProgressBar = ({ value, maxValue, size, strokeWidth, number, isLast, onProgress, isActive }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [currentValue, setCurrentValue] = useState(0);

  const animateProgressBar = useCallback(() => {
    const duration = 600; // Duração da animação em milissegundos
    const intervalDuration = 10; // Duração do intervalo em milissegundos
    const increment = (value / (duration / intervalDuration));

    const intervalId = setInterval(() => {
      setCurrentValue((prevValue) => {
        const newValue = prevValue + increment;
        if (newValue >= value) {
          clearInterval(intervalId);
          onProgress && onProgress(); // Chamar onProgress quando a animação estiver completa
        }
        return newValue <= value ? newValue : value;
      });
    }, intervalDuration);

    return () => {
      clearInterval(intervalId);
    };
  }, [value, onProgress]);

  useEffect(() => {
    if (isActive) {
      animateProgressBar();
    }
  }, [isActive, animateProgressBar]);

  const progress = ((currentValue / maxValue) * 100) * (circumference / 100);
  

  return (
    <div className={styles.circularProgressBar}>
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

export default ProgressBar;
