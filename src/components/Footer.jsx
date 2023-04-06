import styles from '../styles/Footer.module.css';

const Footer = () => {
  return(
    <footer className={styles.container_footer}>
      <div className={styles.info_footer}>
        <div className={styles.container_img}>
          <img src="/logo_fast_nova_cor.png" alt="Logo Fast Sales" />
        </div>
        <div className={styles.info}>
          <p className={styles.telephone}>(47) 4108-1865</p>
          <p className={styles.address}>Rua 700, n 489 - 20 andar</p>
          <p className={styles.address}>Centro - Balneário Camboriú</p>
          <p className={styles.address}>Santa Catarina, Brasil</p>
          <p className={styles.email}>administrativo@fastsaleimoveis.com.br</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer