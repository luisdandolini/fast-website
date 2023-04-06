import styles from '../styles/Reference.module.css';

const Reference = () => {
  return(
    <section className={styles.container_reference}>
      <h2 className={styles.title}>Somos referência no setor imobiliário</h2>

      <div className={styles.wrapper}>

        <div className={styles.refence_info}>
          <a href="https://forbes.com.br/forbes-tech/2021/07/exclusivo-t2-participacoes-e-sort-investimentos-lancam-startup-do-setor-imobiliario/" 
          target='_blank'
          rel="noopener noreferrer" >
            <div className={styles.reference}>
              <img src="/Logo Forbes.png" alt="" />
            </div>
          </a>
          <a href="https://veja.abril.com.br/coluna/radar-economico/startup-promete-vender-imoveis-em-60-dias/" 
          target='_blank'
          rel="noopener noreferrer">
            <div className={styles.reference}>
              <img src="/Logo Veja.png" alt="" />
            </div>
          </a>
          <a href="https://valorinveste.globo.com/produtos/imoveis/noticia/2021/01/30/plataforma-on-line-promete-venda-de-imoveis-em-ate-60-dias.ghtml" 
          target='_blank'
          rel="noopener noreferrer">
            <div className={styles.reference}>
              <img src="/Logo Globo.png" alt="" />
            </div>
          </a>
          <a href="https://epocanegocios.globo.com/colunas/Changemaker/noticia/2021/04/inovacoes-tecnologicas-para-venda-de-imoveis.html" 
          target='_blank'
          rel="noopener noreferrer">
            <div className={styles.reference}>
              <img src="/Logo Época.png" alt="" />
            </div>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Reference