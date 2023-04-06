import ProgressBar from "./ProgressBar"
import styles from '../styles/Easy.module.css'

const Easy = () => {
  return(
    <section>
      <h2 className={styles.title}>Veja como é fácil</h2>
      <div className={styles.container}>
        <div className={styles.circle}>
          <ProgressBar
            value={25}
            maxValue={100}
            size={100}
            strokeWidth={5}
            number={1}
          />
          <span>Cadastre-se</span>
        </div>

        <div className={styles.circle}>
          <ProgressBar
            value={50}
            maxValue={100}
            size={100}
            strokeWidth={5}
            number={2}
          />
          <span>Coloque seus imóveis para parceria 50/50</span>
        </div>

        <div className={styles.circle}>
          <ProgressBar
            value={75}
            maxValue={100}
            size={100}
            strokeWidth={5}
            number={3}
          />
          <span>Receba propostas</span>
        </div>

        <div className={styles.circle}>
          <ProgressBar
            value={100}
            maxValue={100}
            size={100}
            strokeWidth={5}
            number={4}
          />
          <span>Ganhe comissão na venda!</span>
        </div>
      </div>
      <div className={styles.bureaucracy}>
        <div className={styles.container_bureaucracy}>
          <p className={styles.bureaucracy_title}>Sem <br />burocracia</p>
          <p className={styles.bureaucracy_subtitle}>Sem necessidade de exclusividade somente autorização de venda do proprietrário</p>
        </div>
        <div className={styles.details}></div>
      </div>
    </section>
  )
}

export default Easy