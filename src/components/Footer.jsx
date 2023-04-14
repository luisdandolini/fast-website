import Icon from '@mdi/react';
import { mdiMapMarkerOutline } from '@mdi/js';
import { mdiEmailOutline } from '@mdi/js';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return(
    <footer className={styles.container_footer}>
      <div className={styles.info_footer}>
        <div className={styles.container_img}>
          <img src="/logo_fast_nova_cor.png" alt="Logo Fast Sales" />
          <div className={styles.rounded_rectangle}></div>
        </div>
      </div>
      <div className={styles.info}>
          <p className={styles.telephone}>(47) 4108-1865</p>
          <div className={styles.container_address}>
            <span><Icon path={mdiMapMarkerOutline} size={1} color={'#3e5e3f'}/></span> 
            <div>
              <p className={styles.address}>Rua 700, n 489 - 20 andar</p>
              <p className={styles.address}>Centro - Balneário Camboriú</p>
              <p className={styles.address}>Santa Catarina, Brasil</p>
            </div>
          </div>
          <div className={styles.container_email}>
            <span><Icon path={mdiEmailOutline} size={1} color={'#3e5e3f'}/></span>
            <p className={styles.email}>administrativo@fastsaleimoveis.com.br</p>
          </div>
          <div className={styles.nets}>
            <div className={styles.container_email}>
              <span><img className={styles.img} src="/tiktok.png" alt="" /></span>
            </div>
            <div className={styles.container_email}>
              <a href="https://www.instagram.com/fastsale.br/" target='blank'>
                <span><img className={styles.img} src="/instagram.png" alt="" /></span>
              </a>
            </div>
            <div className={styles.container_email}>
              <a href="https://www.youtube.com/@FastSale" target='blank'>
                <span><img className={styles.img} src="/youtube.png" alt="" /></span>
              </a>
            </div>
          </div>
        </div>

    </footer>
  )
}

export default Footer