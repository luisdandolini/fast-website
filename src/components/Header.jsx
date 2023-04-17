import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Header.module.css';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import Logo from './../assets/Fast Sale Horizontal.png';

function HeaderMobile() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleToggle = () => setOpenMenu(!openMenu);

  return (
    <div className={styles.container_header}>
        <img src={Logo} alt='Logo Fast Sales' className={styles.logo}></img>
        <div className={styles.menu}>
          <a className={styles.login} href="https://fastsaleimoveis.com.br/login" target='blank'>
            Login
          </a>

          <div onClick={handleToggle} className={styles.toggle}>
            <span className={styles.details}></span>
            <span className={styles.details}></span>
            <span className={styles.details}></span>

            {openMenu && 
            <>
              <div  className={styles.menu_itens}>
                <div className={styles.close}>
                  <Icon path={mdiClose} size={.9} className={styles.icon}/>
                </div>
                <ul className={styles.links}>
                  <li><a href="https://fastsaleimoveis.com.br/registre-se" target='blank'>Cadastre-se</a></li>
                  <li><a href="https://fastsaleimoveis.com.br/login" target='blank'>Entrar</a></li>
                  <hr />
                  <li><a href="https://fastsaleimoveis.com.br/politicas" target='blank'>Políticas e termos de uso</a></li>
                  <li><a href="https://api.whatsapp.com/send/?phone=554741081865&text&type=phone_number&app_absent=0" target='blank'>Ajuda</a></li>
                </ul>
              </div>
              <div className={styles.overlay}></div>
              </>
            }
          </div>
        </div>
    </div>
  );
}

export default HeaderMobile;

