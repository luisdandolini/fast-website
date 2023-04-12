import styles from '../styles/VideoModal.module.css'

const VideoModal = ({ videoLink, closeModal }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={closeModal}>X</button>
        <iframe
          className={styles.videoIframe}
          src={`${videoLink}?autoplay=1`}
          title="Vídeo do corretor"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};


export default VideoModal