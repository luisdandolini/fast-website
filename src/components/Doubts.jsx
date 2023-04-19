import styles from '../styles/Doubts.module.css';
import Accordion from './Accordion';

const Doubts = () => {
  return(
    <section>
      <h2 className={styles.title}>Dúvidas</h2>
      <div className={styles.container_accordion}>
        <Accordion
          title="Para colocar meus imóveis, preciso ter exclusividade?"
          content="Não, apenas comprovação que você tem autorização do proprietário para trabalhar este imóvel."
        />
        <Accordion
          title="A Fast fica com alguma parte da comissão?"
          content="Não, a comissão é dividida entre o corretor captador e o corretor que vender, 50% pra cada."
        />
        <Accordion
          title="Posso anunciar onde eu quiser?"
          content="Claro, essa é a ideia! Baixe as fotos dos imóveis e anuncie em seu site, redes sociais, portais de anúncios, grupos de Whats e onde mais quiser."
        />
        <Accordion
          title="Como faço para baixar as fotos sem marca d’água?"
          content="Você pode baixar gratuitamente as fotos COM a marca d’água da Fast Sale. Para remover esta marca d’água assine o plano Premium."
        />
        <Accordion
          title="Como faço para agendar visitas?"
          content="Para facilitar, você pode agendar visitas e enviar propostas diretamente pela plataforma. Na página do imóvel você encontra um calendário para agendar visita com seu cliente com horário marcado."
        />
      </div>
    </section>
  )
}

export default Doubts