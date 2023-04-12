import styles from '../styles/Home.module.css';
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

  function handleClick() {
    const sectionPremium = document.getElementById("premium");
    sectionPremium.scrollIntoView({ behavior: "smooth" });
  }

  return(
    <section className={styles.container_home}>
      <div className={styles.container}>
        <h1 className={styles.container_home_title}>Venda seus imóveis <br /> em parceria com <br /> <span className={styles.number}>{number}</span> corretores</h1>

        <button onClick={handleClick}>Quero me tornar Premium</button>

        <div className={styles.rounded_rectangle}></div>
        <div className={styles.rounded_primary_rectangle}></div>
      </div>
    </section>
  )
}

export default Home