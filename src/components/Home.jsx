import styles from '../styles/Home.module.css';
// import Icon from '@mdi/react';
// import { mdiArrowDown } from '@mdi/js';
import api from '../services/api';
import { useEffect, useState } from 'react';

const Home = () => {
  const [totalBrokers, setTotalBrokers] = useState(0);
  const [number, setNumber] = useState(0)

  useEffect(() => {
    api
      .get('/api/public/get-count')
      .then((response) => {
        setTotalBrokers(parseInt(response.data.brokers) + parseInt(response.data.real_estates))
      })
  }, []);

  useEffect(() => {
    if(number !== totalBrokers) {
      setTimeout(() => {
        setNumber(number + 1)
      }, 1.2)
    } else {
      setNumber(number)
    }
  }, [totalBrokers, number])

  return(
    <section className={styles.container_home}>
      <div className={styles.container}>
        <h1 className={styles.container_home_title}>Venda seus imóveis <br /> em parceria com <br /> {number} corretores</h1>

        <button>Quero me tornar Premium</button>

        <div className={styles.rounded_rectangle}></div>
        <div className={styles.rounded_primary_rectangle}></div>
        
        {/* <div className={`${styles.arrow} ${styles.none}`}>
          <Icon path={mdiArrowDown} size={2} color={'#3e5e3f'}/>
        </div> */}
      </div>

      <img src="/antony.jpg" alt="" />
    </section>
  )
}

export default Home