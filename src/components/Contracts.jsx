import Icon from '@mdi/react';
import { mdiFileDocumentEditOutline } from '@mdi/js';
import styles from '../styles/Contracts.module.css';

const Contracts = () => {
  return(
    <section className={styles.contracts}>
      <div className={styles.contractsWrapper}>
        <div className={styles.container_contracts}>
          <Icon path={mdiFileDocumentEditOutline} size={1.8} color={'#3e5e3f'}/>
          <div className={styles.container_content}>
            <p className={styles.content_emphasis}>+ 1000 contratos</p>
            <p className={styles.content_text}>de parceria por mês</p>
          </div>
        </div>
        <div className={styles.container_contracts}>
          <Icon path={mdiFileDocumentEditOutline} size={1.5} color={'#3e5e3f'}/>
          <div className={styles.container_content}>
            <p className={styles.content_emphasis}>+ 1000 contratos</p>
            <p>de parceria por mês</p>
          </div>
        </div>
        <div className={styles.container_contracts}>
          <Icon path={mdiFileDocumentEditOutline} size={1.5} color={'#3e5e3f'}/>
          <div className={styles.container_content}>
            <p className={styles.content_emphasis}>+ 1000 contratos</p>
            <p>de parceria por mês</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contracts
