import styles from '../styles/Reference.module.css';
import references from '../data/references';

const Reference = () => {
  return(
    <section className={styles.container_reference}>
      <h2 className={styles.title}>Somos referência no setor imobiliário</h2>

      <div className={styles.wrapper}>

        <div className={styles.refence_info}>
          {references.map(reference => (
            <a href={reference.url} target='_blank' rel='noopener noreferrer' key={reference.name}>
              <div className={styles.reference}>
                <img src={reference.logo} alt={reference.alt}/>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Reference;
