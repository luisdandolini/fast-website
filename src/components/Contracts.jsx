import styles from '../styles/Contracts.module.css';
import contracts from '../data/contracts';

const Contract = ({ contract }) => {
  return (
    <div className={styles.container_contracts}>
      <img src={contract.src} alt={contract.alt} />
      <div className={styles.container_content}>
        <p className={styles.content_emphasis}>{contract.emphasis}</p>
        <p>{contract.text}</p>
      </div>
    </div>
  )
}

const Contracts = () => {
  return(
    <section className={styles.contracts}>
      <div className={styles.contractsWrapper}>
        {contracts.map((contract, index) => (
          <Contract key={index} contract={contract} />
        ))}
      </div>
    </section>
  )
}

export default Contracts;
