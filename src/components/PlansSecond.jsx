import styles from '../styles/PlansSecond.module.css';

const PlansSecond = () => {
  return(
    <section className={styles.plans}>
      <div className={styles.container}>
        <div className={styles.container_free}>
          <div className={styles.header_free}>
            <p className={styles.free}>Fast Free</p>
            <p className={styles.type}>Grátis</p>
            <button>Cadastre-se</button>
          </div>

          <div className={styles.container_advantage}>
            <p className={styles.advantage}>Vantagens</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Vender imóveis</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Agendar Visitas</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Enviar Propostas</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Baixar Fotos</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Analytics</p>
            <p className={styles.no_type_advantage}>Baixar fotos s/ marca d'água</p>
            <p className={styles.no_type_advantage}>Adicionar 15 imóveis</p>
            <p className={styles.no_type_advantage}>Ver imóveis 7 dias antes</p>
            <p className={styles.no_type_advantage}>Seu site</p>
            <p className={styles.no_type_advantage}>Integrações com portais</p>
            <p className={styles.no_type_advantage}>Compartilhar imóveis s/ marca d'água</p>
            <p className={styles.no_type_advantage}>Relatórios</p>
            <p className={styles.no_type_advantage}>Suporte</p>
          </div>
        </div>

        <div className={styles.container_premium}>
          <div className={styles.header_premium}>
            <p className={styles.free}>Fast Premium</p>
            <p className={styles.times}>12x</p>
            <p className={styles.price}>149<span className={styles.cents}>,90</span></p>
            <button>Assine agora</button>
          </div>

          <div className={styles.container_advantage}>
            <p className={styles.advantage}>Vantagens</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Vender imóveis</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Agendar Visitas</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Enviar Propostas</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Baixar Fotos</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Analytics</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Baixar fotos s/ marca d'água</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Adicionar 15 imóveis</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Ver imóveis 7 dias antes</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Seu site</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Integrações com portais</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Compartilhar imóveis s/ marca d'água</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Relatórios</p>
            <p className={styles.type_advantage}><img className={styles.check} src="/check.png" alt="Check" />Suporte</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlansSecond