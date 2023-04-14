import styles from '../styles/Bureaucracy.module.css';

const Bureaucracy = () => {
  return(
    <section className={styles.bureaucracy}>
      <h1 className={styles.title}>Sem burocracia</h1>
      <div className={styles.container}>
        <img src="/burocracia.png" alt="" className={styles.icon}/>
        <div className={styles.text}>
          <p><b>Sem necessidade de exclusividade</b></p>
          <p>somente autorização de venda do proprietário</p>
        </div>
      </div>
      <div className={styles.doc}></div>
    </section>
  )
}

export default Bureaucracy