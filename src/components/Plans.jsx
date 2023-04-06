import styles from '../styles/Plans.module.css';
import { useState } from 'react';

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
          <button className={styles.corretor} onClick={handleClickButton1}>Corretor</button>
        </div>
        <div>
         <button className={styles.imobiliaria} onClick={handleClickButton2}>Imobiliária</button>
        </div>
      </div>

      {activeContent === "corretor" && (
          <table className={styles.comparison_table}>
            <thead>
              <th>&nbsp;</th>
              <th className={styles.detail_right}>Fast <br /><span className={styles.free_title}>Free2</span></th>
              <th className={styles.title_premium}><span className={styles.space}>Fast</span><br /><span className={styles.premium}>Premium</span></th>
            </thead>
            <tbody>
              <tr className={styles.detail_bottom}>
                <td>Vender Imóveis</td>
                <td className={styles.detail_right}><img className={styles.check} src="/check.png" alt="Check" /></td>
                <td><img className={styles.check} src="/check.png" alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Agendar Imóvel</td>
                <td className={styles.detail_right}><img className={styles.check} src="/check.png" alt="Check" /></td>
                <td><img className={styles.check} src="/check.png" alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Enviar Propostas</td>
                <td className={styles.detail_right}><img className={styles.check} src="/check.png" alt="Check" /></td>
                <td><img className={styles.check} src="/check.png" alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Baixar Fotos</td>
                <td className={styles.detail_right}><img className={styles.check} src="/check.png" alt="Check" /></td>
                <td><img className={styles.check} src="/check.png" alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Relatórios</td>
                <td className={styles.detail_right}><img className={styles.check} src="/check.png" alt="Check" /></td>
                <td><img className={styles.check} src="/check.png" alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Adicionar 15 imóveis</td>
                <td className={styles.detail_right}><img className={styles.no_check} src="/x.png" alt="Check" /></td>
                <td><img className={styles.check} src="/check.png" alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Seu site</td>
                <td className={styles.detail_right}><img className={styles.no_check} src="/x.png" alt="Check" /></td>
                <td><img className={styles.check} src="/check.png" alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Integração com portais</td>
                <td className={styles.detail_right}><img className={styles.no_check} src="/x.png" alt="Check" /></td>
                <td><img className={styles.check} src="/check.png" alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Compartilhar imóveis s/ marca d'água</td>
                <td className={styles.detail_right}><img className={styles.no_check} src="/x.png" alt="Check" /></td>
                <td><img className={styles.check} src="/check.png" alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Analytics</td>
                <td className={styles.detail_right}><img className={styles.no_check} src="/x.png" alt="Check" /></td>
                <td><img className={styles.check} src="/check.png" alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Baixar fotos s/ marca d'água</td>
                <td className={styles.detail_right}><img className={styles.no_check} src="/x.png" alt="Check" /></td>
                <td><img className={styles.check} src="/check.png" alt="Check" /></td>
              </tr>
              <tr className={styles.detail_bottom}>
                <td>Suporte</td>
                <td className={styles.detail_right}><img className={styles.no_check} src="/x.png" alt="Check" /></td>
                <td><img className={styles.check} src="/check.png" alt="Check" /></td>
              </tr>    
              <tr>
                <td></td>
                <td className={styles.detail_right}><br />
                  <span className={styles.free}>Grátis</span>
                  <div className={styles.container_button_free}>
                  <button>Cadastre-se</button>
                  </div>
                </td>
                <td className={styles.align}>
                  <br />
                  <span className={styles.installments}>
                    10x de 
                  </span>
                  <br /> 
                  <span className={styles.dollar}>R$<span className={styles.price}>149,90</span></span>
                  <div className={styles.container_button}>
                  <button>Assine agora</button>
                  </div>
                </td>
              </tr>     
            </tbody>
          </table>
      )}

      {activeContent === "imobiliaria" && (
          <table className={styles.comparison_table}>
                  <thead>
                    <th>&nbsp;</th>
                    <th className={styles.detail_right}>Fast <br /><span className={styles.free_title}>Free</span></th>
                    <th className={styles.title_premium}><span className={styles.space}>Fast</span><br /><span className={styles.premium}>Premium</span></th>
                  </thead>
                  <tbody>
                    <tr className={styles.detail_bottom}>
                      <td>Vender Imóveis</td>
                      <td className={styles.detail_right}><img className={styles.check} src="/check.png" alt="Check" /></td>
                      <td><img className={styles.check} src="/check.png" alt="Check" /></td>
                    </tr>
                    <tr className={styles.detail_bottom}>
                      <td>Agendar Imóvel</td>
                      <td className={styles.detail_right}><img className={styles.check} src="/check.png" alt="Check" /></td>
                      <td><img className={styles.check} src="/check.png" alt="Check" /></td>
                    </tr>
                    <tr className={styles.detail_bottom}>
                      <td>Enviar Propostas</td>
                      <td className={styles.detail_right}><img className={styles.check} src="/check.png" alt="Check" /></td>
                      <td><img className={styles.check} src="/check.png" alt="Check" /></td>
                    </tr>
                    <tr className={styles.detail_bottom}>
                      <td>Baixar Fotos</td>
                      <td className={styles.detail_right}><img className={styles.check} src="/check.png" alt="Check" /></td>
                      <td><img className={styles.check} src="/check.png" alt="Check" /></td>
                    </tr>
                    <tr className={styles.detail_bottom}>
                      <td>Relatórios</td>
                      <td className={styles.detail_right}><img className={styles.check} src="/check.png" alt="Check" /></td>
                      <td><img className={styles.check} src="/check.png" alt="Check" /></td>
                    </tr>
                    <tr className={styles.detail_bottom}>
                      <td>Adicionar 15 imóveis</td>
                      <td className={styles.detail_right}><img className={styles.no_check} src="/x.png" alt="Check" /></td>
                      <td><img className={styles.check} src="/check.png" alt="Check" /></td>
                    </tr>
                    <tr className={styles.detail_bottom}>
                      <td>Seu site</td>
                      <td className={styles.detail_right}><img className={styles.no_check} src="/x.png" alt="Check" /></td>
                      <td><img className={styles.check} src="/check.png" alt="Check" /></td>
                    </tr>
                    <tr className={styles.detail_bottom}>
                      <td>Integração com portais</td>
                      <td className={styles.detail_right}><img className={styles.no_check} src="/x.png" alt="Check" /></td>
                      <td><img className={styles.check} src="/check.png" alt="Check" /></td>
                    </tr>
                    <tr className={styles.detail_bottom}>
                      <td>Compartilhar imóveis s/ marca d'água</td>
                      <td className={styles.detail_right}><img className={styles.no_check} src="/x.png" alt="Check" /></td>
                      <td><img className={styles.check} src="/check.png" alt="Check" /></td>
                    </tr>
                    <tr className={styles.detail_bottom}>
                      <td>Analytics</td>
                      <td className={styles.detail_right}><img className={styles.no_check} src="/x.png" alt="Check" /></td>
                      <td><img className={styles.check} src="/check.png" alt="Check" /></td>
                    </tr>
                    <tr className={styles.detail_bottom}>
                      <td>Baixar fotos s/ marca d'água</td>
                      <td className={styles.detail_right}><img className={styles.no_check} src="/x.png" alt="Check" /></td>
                      <td><img className={styles.check} src="/check.png" alt="Check" /></td>
                    </tr>
                    <tr className={styles.detail_bottom}>
                      <td>Suporte</td>
                      <td className={styles.detail_right}><img className={styles.no_check} src="/x.png" alt="Check" /></td>
                      <td><img className={styles.check} src="/check.png" alt="Check" /></td>
                    </tr>    
                    <tr>
                      <td></td>
                      <td className={styles.detail_right}><br />
                        <span className={styles.free}>Grátis</span>
                        <div className={styles.container_button_free}>
                        <button>Cadastre-se</button>
                        </div>
                      </td>
                      <td className={styles.align}>
                        <br />
                        <span className={styles.installments}>
                          10x de 
                        </span>
                        <br /> 
                        <span className={styles.dollar}>R$<span className={styles.price}>149,90</span></span>
                        <div className={styles.container_button}>
                        <button>Assine agora</button>
                        </div>
                      </td>
                    </tr>     
                  </tbody>
          </table>
      )}

    </section>
  )
}

export default Plans