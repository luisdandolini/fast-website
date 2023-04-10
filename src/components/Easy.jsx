import ProgressBar from "./ProgressBar";
import styles from '../styles/Easy.module.css';

const circles = [
  {
    value: 25,
    maxValue: 100,
    size: 100,
    strokeWidth: 5,
    number: 1,
    text: 'Cadastre-se'
  },
  {
    value: 50,
    maxValue: 100,
    size: 100,
    strokeWidth: 5,
    number: 2,
    text: 'Coloque seus imóveis para parceria 50/50'
  },
  {
    value: 75,
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

const Circle = ({ value, maxValue, size, strokeWidth, number, isLast, text }) => {
  return (
    <div className={styles.circle}>
      <ProgressBar {...{ value, maxValue, size, strokeWidth, number, isLast }} />
      <span>{text}</span>
    </div>
  )
}

const Easy = () => {
  return(
    <section className={styles.bg_desktop}>
      <h2 className={styles.title}>Veja como é fácil</h2>
      <div className={styles.container_easy}>
        <div className={styles.container}>
          {circles.map(circle => (
            <Circle key={circle.number} {...circle} />
          ))}
        </div>
        <img src="/antony.jpg" alt="" />
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
