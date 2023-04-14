import styles from '../styles/Benefits.module.css';
import benefitsList from '../data/benefitsList';
import benefistListColumnFirst from '../data/benefistListColumnFirst';
import benefitsColumnSecond from '../data/benefitsColumnSecond';

const Benefits = () => {
  function handleClick() {
    const sectionPremium = document.getElementById("premium");
    sectionPremium.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className={styles.container}>
      <div className={styles.container_benefits}>
        <h1 className={styles.title}>O que você ganha sendo Fast Premium</h1>

        <div className={`${styles.container_benefits_desktop} ${styles.noneDesktop}`}>
          <div>
            {benefistListColumnFirst.map((benefitFirst, index) => (
              <div className={styles.benefits} key={index}>
                <div className={styles.container_columns}>
                  <div className={styles.column}>
                    <img src={benefitFirst.src} alt="" className={styles.img}/>
                    <span>{benefitFirst.title}</span>
                  </div>
                  <p className={styles.description}>{benefitFirst.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            {benefitsColumnSecond.map((benefitSecond, index) => (
              <div className={styles.benefits} key={index}>
                <div className={styles.container_columns}>
                  <div className={styles.column}>
                    <img src={benefitSecond.src} alt="" className={styles.img}/>
                    <span>{benefitSecond.title}</span>
                  </div>
                  <p className={styles.description}>{benefitSecond.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {benefitsList.map((benefit, index) => (
          <div className={`${styles.benefits} ${styles.noneMobile}`} key={index}>
            <div className={styles.benefits_title}>
              <img src={benefit.src} alt={benefit.alt} className={styles.img}/>
              <span>{benefit.title}</span>
            </div>
            <p className={styles.benefits_description}>{benefit.description}</p>
          </div>
        ))}
        <div className={styles.button}>
          <button onClick={handleClick}>Quero ser Premium</button>
        </div>
      </div>
    </section>
  )
}

export default Benefits;
