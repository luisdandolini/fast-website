import Icon from '@mdi/react';
import { mdiFileDocumentEditOutline } from '@mdi/js';
import styles from '../styles/Contracts.module.css';
import contracts from '../data/contracts';

const Contract = ({ size, emphasis, text }) => {
  return (
    <div className={styles.container_contracts}>
      <Icon path={mdiFileDocumentEditOutline} size={size} color={'#3e5e3f'}/>
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
