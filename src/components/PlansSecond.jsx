import styles from '../styles/PlansSecond.module.css';
import Icon from '@mdi/react';
import { mdiInformationVariantCircle } from '@mdi/js';
import Tooltip from '@mui/material/Tooltip';
import api from '../services/api';
import { useEffect, useState } from 'react';
import Check from './../assets/check.png'

const PlansSecond = () => {
  const [activeContent, setActiveContent] = useState("corretor");
  const [totalBrokers, setTotalBrokers] = useState(0);
  const [number, setNumber] = useState(0)

  const handleClickButton1 = () => {
    setActiveContent("corretor");
  };

  const handleClickButton2 = () => {
    setActiveContent("imobiliaria");
  };

  useEffect(() => {
    api
      .get('/api/public/get-count')
      .then((response) => {
        setTotalBrokers(parseInt(response.data.brokers) + parseInt(response.data.real_estates))
      })
  }, []);

  useEffect(() => {
    if(number !== totalBrokers) {
      setTimeout(() => {
        setNumber(number + 1)
      }, 1.2)
    } else {
      setNumber(number)
    }
  }, [totalBrokers, number])

  return(
    <section id='premium'>
      <h1 className={styles.title}>Nossos planos</h1> 
      
      <div className={styles.container_buttons}>
        <div> 
          <button className={activeContent === 'corretor' ? styles.active :  ''} onClick={handleClickButton1}>Corretor</button>
        </div>
        <div>
         <button className={activeContent === 'imobiliaria' ? styles.active : ''} onClick={handleClickButton2}>Imobiliária</button>
        </div>
      </div>
      {activeContent === 'corretor' && (
        <div className={styles.plans}>
          <div className={styles.container}>
            <div className={styles.container_free}>
              <div className={styles.header_free}>
                <p className={styles.free}>Fast Sale</p>
                <p className={styles.details_free}>Venda imóveis de outros corretores em parceria</p>
                <p className={styles.type}>Grátis</p>
                <button>
                  <a style={{textDecoration: 'none', color: "#FFF"}} href="https://fastsaleimoveis.com.br/registre-se" target='blank'>Cadastre-se</a> 
                </button>
              </div>
              <div className={styles.container_advantage}>
                <p className={styles.advantage} data-tip="Texto do tooltip">Vantagens</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Vender imóveis</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Agendar Visitas</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Enviar Propostas</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Baixar Fotos</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Analytics</p>
                <p className={styles.no_type_advantage}>Seu site</p>
                <p className={styles.no_type_advantage}>Baixar fotos s/ marca d'água</p>
                <p className={styles.no_type_advantage}>Adicionar 15 imóveis</p>
                <p className={styles.no_type_advantage}>Ver imóveis 7 dias antes</p>
                <p className={styles.no_type_advantage}>Integrações com portais</p>
                <p className={styles.no_type_advantage}>Compartilhar imóveis s/ marca d'água</p>
                <p className={styles.no_type_advantage}>Relatórios</p>
                <p className={styles.no_type_advantage}>Suporte</p>
              </div>
            </div>

            <div className={styles.container_premium_trimestral}>
              <div className={styles.header_premium}>
                <p className={styles.free}>Fast Premium</p>
                <p className={styles.details_premium}>Coloque seus imóveis para venda em parceria com {number} corretores</p>
                <div>
                  <p className={styles.times}>3x</p>
                  <p className={styles.price}>249<span className={styles.cents}>,90</span></p>
                </div>
                <button>Assine agora</button>
              </div>
              <div className={styles.container_advantage}>
                <p className={styles.advantage}>Vantagens</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Vender imóveis</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Agendar Visitas</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Enviar Propostas</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Baixar Fotos</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Analytics</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Seu site
                  <Tooltip title="novidade! disponível a partir de 01/05" className={styles.tooltip}>
                  <Icon path={mdiInformationVariantCircle} size={.9} />
                  </Tooltip>
                </p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Baixar fotos s/ marca d'água</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Adicionar 15 imóveis</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Ver imóveis 7 dias antes</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Integrações com portais</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Compartilhar imóveis s/ marca d'água</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Relatórios</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Suporte</p>
              </div>
            </div>

            <div className={styles.container_premium_anual}>
              <div className={styles.header_premium}>
                <p className={styles.free}>Fast Premium</p>
                <p className={styles.details_premium}>Coloque seus imóveis para venda em parceria com {number} corretores</p>
                <div>
                  <p className={styles.times}>12x</p>
                  <p className={styles.price}>149<span className={styles.cents}>,90</span></p>
                </div>
                <button>Assine agora</button>
              </div>
              <div className={styles.container_advantage}>
                <p className={styles.advantage}>Vantagens</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Vender imóveis</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Agendar Visitas</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Enviar Propostas</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Baixar Fotos</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Analytics</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Seu site
                  <Tooltip title="novidade! disponível a partir de 01/05" className={styles.tooltip}>
                  <Icon path={mdiInformationVariantCircle} size={.9} />
                  </Tooltip>
                </p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Baixar fotos s/ marca d'água</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Adicionar 15 imóveis</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Ver imóveis 7 dias antes</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Integrações com portais</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Compartilhar imóveis s/ marca d'água</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Relatórios</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Suporte</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeContent === 'imobiliaria' && (
        <div className={styles.plans}>
          <div className={styles.container}>
            <div className={styles.container_free}>
              <div className={styles.header_free}>
                <p className={styles.free}>Fast Sale</p>
                <p className={styles.details_free}>Venda imóveis de outros corretores em parceria</p>
                <p className={styles.type}>Grátis</p>
                <button>Acesse agora</button>
              </div>
              <div className={styles.container_advantage}>
                <p className={styles.advantage} data-tip="Texto do tooltip">Vantagens</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Vender imóveis</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Agendar Visitas</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Enviar Propostas</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Baixar Fotos</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Analytics</p>
                <p className={styles.no_type_advantage}>Gestão de Corretores</p>
                <p className={styles.no_type_advantage}>2 Corretores Premium</p>
                <p className={styles.no_type_advantage}>Seu site</p>
                <p className={styles.no_type_advantage}>Baixar fotos s/ marca d'água</p>
                <p className={styles.no_type_advantage}>Adicionar 25 imóveis</p>
                <p className={styles.no_type_advantage}>Ver imóveis 7 dias antes</p>
                <p className={styles.no_type_advantage}>Integrações com portais</p>
                <p className={styles.no_type_advantage}>Compartilhar imóveis s/ marca d'água</p>
                <p className={styles.no_type_advantage}>Relatórios</p>
                <p className={styles.no_type_advantage}>Suporte</p>
              </div>
            </div>

            <div className={styles.container_premium_trimestral}>
              <div className={styles.header_premium}>
                <p className={styles.free}>Fast Premium</p>
                <p className={styles.details_premium}>Coloque seus imóveis para venda em parceria com {number} corretores</p>
                <div>
                  <p className={styles.times}>3x</p>
                  <p className={styles.price}>399<span className={styles.cents}>,90</span></p>
                </div>
                <button>Assine agora</button>
              </div>
              <div className={styles.container_advantage}>
                <p className={styles.advantage}>Vantagens</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Vender imóveis</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Agendar Visitas</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Enviar Propostas</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Baixar Fotos</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Analytics</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Gestão de Corretores
                  <Tooltip title="novidade! disponível a partir de 01/05" className={styles.tooltip}>
                    <Icon path={mdiInformationVariantCircle} size={.9} />
                  </Tooltip>
                </p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />2 Corretores Premium</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Seu site
                  <Tooltip title="novidade! disponível a partir de 01/05" className={styles.tooltip}>
                  <Icon path={mdiInformationVariantCircle} size={.9} />
                  </Tooltip>
                </p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Baixar fotos s/ marca d'água</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Adicionar 25 imóveis</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Ver imóveis 7 dias antes</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Integrações com portais</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Compartilhar imóveis s/ marca d'água</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Relatórios</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Suporte</p>
              </div>
            </div>

            <div className={styles.container_premium_anual}>
              <div className={styles.header_premium}>
                <p className={styles.free}>Fast Premium</p>
                <p className={styles.details_premium}>Coloque seus imóveis para venda em parceria com {number} corretores</p>
                <div>
                  <p className={styles.times}>12x</p>
                  <p className={styles.price}>249<span className={styles.cents}>,90</span></p>
                </div>
                <button>Assine agora</button>
              </div>
              <div className={styles.container_advantage}>
                <p className={styles.advantage}>Vantagens</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Vender imóveis</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Agendar Visitas</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Enviar Propostas</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Baixar Fotos</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Analytics</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Gestão de Corretores
                  <Tooltip title="novidade! disponível a partir de 01/05" className={styles.tooltip}>
                    <Icon path={mdiInformationVariantCircle} size={.9} />
                  </Tooltip>
                </p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />2 Corretores Premium</p>
                <p className={styles.type_advantage_premium}><img className={styles.check} src={Check} alt="Check" />Seu site
                  <Tooltip title="novidade! disponível a partir de 01/05" className={styles.tooltip}>
                    <Icon path={mdiInformationVariantCircle} size={.9} />
                  </Tooltip>
                </p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Baixar fotos s/ marca d'água</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Adicionar 25 imóveis</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Ver imóveis 7 dias antes</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Integrações com portais</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Compartilhar imóveis s/ marca d'água</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Relatórios</p>
                <p className={styles.type_advantage}><img className={styles.check} src={Check} alt="Check" />Suporte</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default PlansSecond