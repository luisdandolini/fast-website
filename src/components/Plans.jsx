import styles from '../styles/Plans.module.css';
import { useState } from 'react';
import Check from './../assets/check.png'
import NoCheck from './../assets/x.png'

const Plans = () => {
  const [activeContent, setActiveContent] = useState("corretor");

  const handleClickButton1 = () => {
    setActiveContent("corretor");
  };

  const handleClickButton2 = () => {
    setActiveContent("imobiliaria");
  };

  return(
    <section>
      <h1 className={styles.title}>Nossos planos</h1> 

      <div className={styles.container_buttons}>
        <div> 
          <button className={activeContent === 'corretor' ? styles.active :  ''} onClick={handleClickButton1}>Corretor</button>
        </div>
        <div>
         <button className={activeContent === 'imobiliaria' ? styles.active : ''} onClick={handleClickButton2}>Imobiliária</button>
        </div>
      </div>

      {activeContent === "corretor" && (
        <div className={styles.container}>
          <table className={styles.comparison_table}>
            <thead>
              <th>&nbsp;</th>
              <th className={styles.detail_right}>Fast <br /><span className={styles.free_title}>Free</span></th>
              <th className={styles.title_premium}><span>Fast</span><br /><span className={styles.premium}>Premium</span></th>
            </thead>
            <tbody>
              <tr className={styles.detail_bottom}>
                <td>Vender Imóveis</td>
                <td className={styles.detail_right}><img className={styles.check} src={Check} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Agendar Visitas</td>
                <td className={styles.detail_right}><img className={styles.check} src={Check} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Enviar Propostas</td>
                <td className={styles.detail_right}><img className={styles.check} src={Check} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Baixar Fotos</td>
                <td className={styles.detail_right}><img className={styles.check} src={Check} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Analytics</td>
                <td className={styles.detail_right}><img className={styles.check} src={Check} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Seu site</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Baixar fotos s/ marca d'água</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Adicionar 15 imóveis</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Ver imóveis 7 dias antes</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Integração com portais</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Compartilhar imóveis s/ marca d'água</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Relatórios</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>    
              <tr className={styles.detail_bottom}>
                <td>Suporte</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>    
              <tr>
                <td></td>
                <td className={styles.detail_right}></td>
                <td></td>
              </tr> 
              <tr>
                <td></td>
                <td className={styles.detail_right}></td>
                <td></td>
              </tr>  
            </tbody>
          </table>
        </div>
      )}

      {activeContent === "imobiliaria" && (
        <div className={styles.container}>
          <table className={styles.comparison_table}>
            <thead>
              <th>&nbsp;</th>
              <th className={styles.detail_right}>Fast <br /><span className={styles.free_title}>Free</span></th>
              <th className={styles.title_premium}><span>Fast</span><br /><span className={styles.premium}>Premium</span></th>
            </thead>
            <tbody>
              <tr className={styles.detail_bottom}>
                <td>Vender Imóveis</td>
                <td className={styles.detail_right}><img className={styles.check} src={Check} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Agendar Visitas</td>
                <td className={styles.detail_right}><img className={styles.check} src={Check} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Enviar Propostas</td>
                <td className={styles.detail_right}><img className={styles.check} src={Check} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Baixar Fotos</td>
                <td className={styles.detail_right}><img className={styles.check} src={Check} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Analytics</td>
                <td className={styles.detail_right}><img className={styles.check} src={Check} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Gestão de Corretores</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Seu site</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Baixar fotos s/ marca d'água</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Adicionar 25 imóveis</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Ver imóveis 7 dias antes</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Integração com portais</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Compartilhar imóveis s/ marca d'água</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Relatórios</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>    
              <tr className={styles.detail_bottom}>
                <td>Suporte</td>
                <td className={styles.detail_right}><img className={styles.no_check} src={NoCheck} alt="Check" /></td>
                <td><img className={styles.check} src={Check} alt="Check" /></td>
              </tr>    
              <tr>
                <td></td>
                <td className={styles.detail_right}></td>
                <td></td>
              </tr> 
              <tr>
                <td></td>
                <td className={styles.detail_right}></td>
                <td></td>
              </tr>  
            </tbody>
          </table>
        </div>
      )}

    </section>
  )
}

export default Plans