import styles from '../styles/Doubts.module.css';
import Accordion from './Accordion';

const Doubts = () => {
  return(
    <section>
      <h2 className={styles.title}>Dúvidas</h2>
      <div>
        <Accordion
          title="Quantos imóveis posso colocar?"
          content="Conteúdo do Accordion 1"
        />
        <Accordion
          title="Quantos imóveis posso colocar?"
          content="Conteúdo do Accordion 2"
        />
      </div>
    </section>
  )
}

export default Doubts