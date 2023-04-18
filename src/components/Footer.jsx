import Icon from '@mdi/react';
import { mdiMapMarkerOutline } from '@mdi/js';
import { mdiEmailOutline } from '@mdi/js';
import styles from '../styles/Footer.module.css';
import { useEffect, useState } from 'react';
import { useMediaQuery } from "react-responsive";
import Logo from './../assets/logo_fast_nova_cor.png'
import Instagram from './../assets/instagram.png'
import Youtube from './../assets/youtube.png';

const Footer = () => {

  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);


  return(
    <footer className={styles.container_footer}>
      <div className={styles.info_footer}>
        <div className={styles.container_img}>
          <img src={Logo} alt="Logo Fast Sales" />
          <div className={`${isMobile ? styles.nets : styles.none}`}>
            <div className={styles.container_email}>
                <a href="https://www.instagram.com/fastsale.br/" target='blank'>
                  <span><img className={styles.img} src={Instagram} alt="" /></span>
                </a>
              </div>
              <div className={styles.container_email}>
                <a href="https://www.youtube.com/@FastSale" target='blank'>
                  <span><img className={styles.img} src={Youtube} alt="" /></span>
                </a>
              </div>
            </div>
          <div className={styles.rounded_rectangle}></div>
        </div>
      </div>
      <div style={{textAlign: 'center', fontSize:'20px', color: '#3e5e3f'}}> 
        <b> Viva o jeito americano <br /> de vender imóveis.</b> 
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
          <div className={`${!isMobile ? styles.nets : styles.none}`}>
            <div className={styles.nets}>
            <div className={styles.container_email}>
                <a href="https://www.instagram.com/fastsale.br/" target='blank'>
                  <span><img className={styles.img} src={Instagram} alt="" /></span>
                </a>
              </div>
              <div className={styles.container_email}>
                <a href="https://www.youtube.com/@FastSale" target='blank'>
                  <span><img className={styles.img} src={Youtube} alt="" /></span>
                </a>
              </div>
            </div>
          </div>
      </div>

    </footer>
  )
}

export default Footer