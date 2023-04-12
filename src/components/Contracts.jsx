import styles from '../styles/Contracts.module.css';
import contracts from '../data/contracts';

const Contract = ({ src, alt, emphasis, text }) => {
  return (
    <div className={styles.container_contracts}>
      <img src={src} alt={alt} />
      <div className={styles.container_content}>
        <p className={styles.content_emphasis}>{emphasis}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

const Contracts = () => {
  return(
    <section className={styles.contracts}>
      <div className={styles.contractsWrapper}>
        {contracts.map((contract, index) => (
          <Contract key={index} {...contract} />
        ))}
      </div>
    </section>
  )
}

export default Contracts;
