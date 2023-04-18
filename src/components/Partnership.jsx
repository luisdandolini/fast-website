import styles from "../styles/Partnership.module.css"
import { useEffect, useState, useRef } from "react";
import api from "../services/api";

const Partnership = () => {
  const [totalBrokers, setTotalBrokers] = useState(0);
  const [number, setNumber] = useState(0)
  const sectionRef = useRef(null);
  const [shouldStartCount, setShouldStartCount] = useState(false);

  useEffect(() => {
    api
      .get('/api/public/get-count')
      .then((response) => {
        console.log(response)
        setTotalBrokers(parseInt(response.data.brokers) + parseInt(response.data.real_estates))
      })
  }, []);

  useEffect(() => {
    if (shouldStartCount && number !== totalBrokers) {
      setTimeout(() => {
        setNumber(number + 1);
      }, 0);
    } else {
      setNumber(number);
    }
  }, [totalBrokers, number, shouldStartCount]);
  

  useEffect(() => {
    function handleScroll() {
      const sectionPosition = sectionRef.current.getBoundingClientRect();
      const screenPosition = window.innerHeight / 1.3;
  
      if (sectionPosition.top < screenPosition) {
        setShouldStartCount(true);
      }
    }
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    const sectionPremium = document.getElementById("premium");
    sectionPremium.scrollIntoView({ behavior: "smooth" });
  }

  return(
    <section ref={sectionRef} className={styles.partnership}>
      <h1 className={styles.container_home_title}>Venda seus imóveis em parceria <br /></h1>
      <h1 className={styles.title_number}> com <span className={styles.number}>{number}</span> <span className={styles.brokers} >corretores</span> </h1>
      
      <button onClick={handleClick} className={styles.button}>Quero ser Fast</button>
      <div className={styles.rounded_rectangle}></div>
      <div className={styles.rounded_primary_rectangle}></div>
    </section>
  )
}

export default Partnership