import styles from '../styles/Brokers.module.css';
import Icon from '@mdi/react';
import { mdiFormatQuoteOpen, mdiFormatQuoteClose } from '@mdi/js';
import brokers from '../data/brokers';
import VideoModal from './VideoModal';
import { useState } from 'react';

const Broker = ({ image, name, text, profession, link, onLinkClick }) => {
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
      <button className={styles.link} onClick={() => onLinkClick(link)}>
        <span>Assista o vídeo</span><img src="/Play video.png" alt="" />
      </button>
    </div>
  );
};

const Brokers = () => {
  const [showModal, setShowModal] = useState(false);
  const [videoLink, setVideoLink] = useState('');

  const openModal = (link) => {
    setVideoLink(link);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return(
    <section className={styles.broker}>
      <h2 className={styles.title}>O que os corretores Premium estão falando</h2>

      <div className={styles.brokersWrapper}>
        {brokers.map((broker, index) => (
          <Broker key={index} {...broker} onLinkClick={openModal} />
        ))}
      </div>
      {showModal && <VideoModal videoLink={videoLink} closeModal={closeModal} />}
    </section>
  )
}

export default Brokers;
