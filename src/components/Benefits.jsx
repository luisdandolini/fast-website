import styles from '../styles/Benefits.module.css';
import Icon from '@mdi/react';
import benefitsList from '../data/benefitsList';
import benefistListColumnFirst from '../data/benefistListColumnFirst';
import benefitsColumnSecond from '../data/benefitsColumnSecond';

const Benefits = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container_benefits}>
        <h1 className={styles.title}>O que você ganha sendo Fast Premium</h1>

        <div className={styles.rounded_primary_rectangle}></div>
        <div className={styles.rounded_second_rectangle}></div>

        <div className={`${styles.container_benefits_desktop} ${styles.noneDesktop}`}>
          <div>
            {benefistListColumnFirst.map((benefitFirst, index) => (
              <div className={styles.benefits} key={index}>
                <div className={styles.container_columns}>
                  <Icon path={benefitFirst.icon} size={2} color={'#3e5e3f'} />
                  <span>{benefitFirst.title}</span>
                  <p className={styles.description}>{benefitFirst.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            {benefitsColumnSecond.map((benefitSecond, index) => (
              <div className={styles.benefits} key={index}>
                <div className={styles.container_columns}>
                  <Icon path={benefitSecond.icon} size={2} color={'#3e5e3f'} />
                  <span>{benefitSecond.title}</span>
                  <p className={styles.description}>{benefitSecond.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {benefitsList.map((benefit, index) => (
          <div className={`${styles.benefits} ${styles.noneMobile}`} key={index}>
            <div className={styles.benefits_title}>
              <Icon path={benefit.icon} size={2} color={'#3e5e3f'}/>
              <span>{benefit.title}</span>
            </div>
            <p className={styles.benefits_description}>{benefit.description}</p>
          </div>
        ))}
        <div className={styles.button}>
          <button>Quero ser Premium</button>
        </div>
      </div>
    </section>
  )
}

export default Benefits;
