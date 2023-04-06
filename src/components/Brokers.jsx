import styles from '../styles/Brokers.module.css';
import Icon from '@mdi/react';
import { mdiFormatQuoteOpen, mdiFormatQuoteClose } from '@mdi/js';

const Brokers = () => {
  return(
    <section className={styles.broker}>
      <h2 className={styles.title}>O que os corretores Premium estão falando</h2>

      <div className={styles.brokersWrapper}>
      <div className={styles.container_broker}>
        <img src="/background.jpg" alt="Teste" />

        <p className={styles.broker_name}>Cristiano Sebben</p>
        <p className={styles.broker_text}>
          <span>
            <Icon path={mdiFormatQuoteOpen} size={1} color={'#3e5e3f'}/>
          </span>
          Lorem ipsum dolor sit amet consectetur, adipisicin
          elit. Dolorum optio explicabo officii
          s dolore nostrum, ducimus esse ea repudiandae labore possimus qui ratione iure eligendi
          <span>
          <Icon path={mdiFormatQuoteClose} size={1} />
          </span>
        </p>
      </div>
      <div className={styles.container_broker}>
        <img src="/background.jpg" alt="Teste" />

        <p className={styles.broker_name}>Cristiano Sebben</p>
        <p className={styles.broker_text}>
          <span>
            <Icon path={mdiFormatQuoteOpen} size={1} color={'#3e5e3f'}/>
          </span>
          Lorem ipsum dolor sit amet consectetur, adipisicin
          elit. Dolorum optio explicabo officii
          s dolore nostrum, ducimus esse ea repudiandae labore possimus qui ratione iure eligendi
          <span>
          <Icon path={mdiFormatQuoteClose} size={1} />
          </span>
        </p>
      </div>
      <div className={styles.container_broker}>
        <img src="/background.jpg" alt="Teste" />

        <p className={styles.broker_name}>Cristiano Sebben</p>
        <p className={styles.broker_text}>
          <span>
            <Icon path={mdiFormatQuoteOpen} size={1} color={'#3e5e3f'}/>
          </span>
          Lorem ipsum dolor sit amet consectetur, adipisicin
          elit. Dolorum optio explicabo officii
          s dolore nostrum, ducimus esse ea repudiandae labore possimus qui ratione iure eligendi
          <span>
          <Icon path={mdiFormatQuoteClose} size={1} />
          </span>
        </p>
      </div>
      </div>
    </section>
  )
}

export default Brokers