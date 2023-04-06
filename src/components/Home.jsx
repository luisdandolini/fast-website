import styles from '../styles/Home.module.css';
import Icon from '@mdi/react';
import { mdiArrowDown } from '@mdi/js';

const Home = () => {
  return(
    <section className={styles.container_home}>
      <h1 className={styles.container_home_title}>Venda seus imóveis em parceria com 1737 corretores</h1>

      <button>Quero me tornar Premium</button>

      <div className={styles.rounded_rectangle}></div>
      <div className={styles.rounded_second_rectangle}></div>
      
      <div className={styles.arrow}>
        <Icon path={mdiArrowDown} size={2} color={'#3e5e3f'}/>
      </div>
    </section>
  )
}

export default Home