import styles from '../styles/Brokers.module.css';
import Icon from '@mdi/react';
import { mdiFormatQuoteOpen, mdiFormatQuoteClose } from '@mdi/js';
import brokers from '../data/brokers';

const Broker = ({ image, name, text, profession, link }) => {
  return (
    <div className={styles.container_broker}>
      <img src={image} alt={name} />
      <p className={styles.broker_text}>
        <span>
          <Icon path={mdiFormatQuoteOpen} size={.7} color={'#3e5e3f'}/>
        </span>
        {text}
        <span>
          <Icon path={mdiFormatQuoteClose} size={.7} color={'#3e5e3f'}/>
        </span>
      </p>
      <p className={styles.broker_name}>{name}</p>
      <p className={styles.profession}>{profession}</p>
      <a className={styles.link} href={link}>
       <span><img src="/Play video.png" alt="" />Assista o vídeo</span>
      </a>
    </div>
  )
}

const Brokers = () => {
  return(
    <section className={styles.broker}>
      <h2 className={styles.title}>O que os corretores Premium estão falando</h2>

      <div className={styles.brokersWrapper}>
        {brokers.map((broker, index) => (
          <Broker key={index} {...broker} />
        ))}
      </div>
    </section>
  )
}

export default Brokers;
