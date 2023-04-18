import styles from '../styles/Home.module.css';
import api from '../services/api';
import { useEffect, useState } from 'react';
import { useMediaQuery } from "react-responsive";
import Sua from '../assets/sua.png';
import Risco from '../assets/risco.png';
import Detalhe from '../assets/detail.png';

const Home = () => {

  const [isMobile, setIsMobile] = useState(false);
  const isMobileQuery = useMediaQuery({ query: `(max-width: 767px)` });
  const [properties, setProperties] = useState(0)
  const formattedValue = parseFloat(properties / 100000000000).toLocaleString("pt-BR", { maximumSignificantDigits: 2 }).toLocaleString("pt-BR", { minimumSignificantDigits: 1 });

  useEffect(() => {
    setIsMobile(isMobileQuery);
  }, [isMobileQuery]);

  useEffect(() => {
    api
      .get('/api/public/get-count')
      .then((response) => {
        console.log(response)
        setProperties(response.data.properties);
      })
  }, []);


  function handleClick() {
    const sectionPremium = document.getElementById("premium");
    sectionPremium.scrollIntoView({ behavior: "smooth" });
  }

  return(
    <section className={styles.container_home}>
      <div className={styles.container}>
        <h1 className={styles.container_home_title}>
         <span className={styles.span}>
          Acesse nossa <span className={isMobile ? styles.none : ''}>pauta com mais</span> 
          <img className={styles.your} src={Sua} alt='Ilustração palavra SUA'></img>
          <img className={styles.risco} src={Risco} alt='Detalhe risco'></img>
        </span>  
        <span className={!isMobile ? styles.none : ''}>pauta com mais</span> de R${formattedValue} bilhões em imóveis
        </h1>


        <button onClick={handleClick}>Quero ser Fast</button>
          
        <div className={styles.rounded_rectangle}></div>
        <div className={!isMobile ? styles.rounded_primary_rectangle : ''}></div>
        <img src={Detalhe} alt='Detalhe' className={isMobile ? styles.detail : styles.none}></img>
      </div>
    </section>
  )
}

export default Home