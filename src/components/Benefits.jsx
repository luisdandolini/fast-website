import styles from '../styles/Benefits.module.css';
import Icon from '@mdi/react';
import { mdiHomeMinusOutline, mdiCalendarCheckOutline, mdiImageCheckOutline, mdiPageNextOutline, mdiAutorenew, mdiSchoolOutline, mdiPhone, mdiChartLine } from '@mdi/js';

const benefitsList = [
  {
    icon: mdiHomeMinusOutline,
    title: 'Coloque seus imóveis',
    description: 'Para venda em parceria',
  },
  {
    icon: mdiCalendarCheckOutline,
    title: 'Acesso 7 dias antes',
    description: 'Veja os novos imóveis antes dos outros corretores',
  },
  {
    icon: mdiImageCheckOutline,
    title: 'Sem marca d`água',
    description: 'Faça o download das fotos sem marca d`água',
  },
  {
    icon: mdiPageNextOutline,
    title: 'Seu site',
    description: 'para venda em parceria',
  },
  {
    icon: mdiAutorenew,
    title: 'Integração com portais',
    description: 'Anuncie os imóveis da Fast em apenas um clique',
  },
  {
    icon: mdiSchoolOutline,
    title: 'Fast Academy',
    description: 'Aulas exclusivas',
  },
  {
    icon: mdiPhone,
    title: 'Suporte',
    description: 'Atendimento VIP com nossos gestores',
  },
  {
    icon: mdiChartLine,
    title: 'Relatórios',
    description: 'Reuna os dados de performance dos seus imóveis para enviar aos clientes',
  },
];

const benefistListColumnFirst = [
  {
    icon: mdiHomeMinusOutline,
    title: 'Coloque seus imóveis',
    description: 'Para venda em parceria',
  },
  {
    icon: mdiCalendarCheckOutline,
    title: 'Acesso 7 dias antes',
    description: 'Veja os novos imóveis antes dos outros corretores',
  },
  {
    icon: mdiImageCheckOutline,
    title: 'Sem marca d`água',
    description: 'Faça o download das fotos sem marca d`água',
  },
  {
    icon: mdiPageNextOutline,
    title: 'Seu site',
    description: 'para venda em parceria',
  },
]

const benefitsColumnSecond = [
  {
    icon: mdiAutorenew,
    title: 'Integração com portais',
    description: 'Anuncie os imóveis da Fast em apenas um clique',
  },
  {
    icon: mdiSchoolOutline,
    title: 'Fast Academy',
    description: 'Aulas exclusivas',
  },
  {
    icon: mdiPhone,
    title: 'Suporte',
    description: 'Atendimento VIP com nossos gestores',
  },
  {
    icon: mdiChartLine,
    title: 'Relatórios',
    description: 'Reuna os dados de performance dos seus imóveis para enviar aos clientes',
  },
]

const Benefits = () => {
  return (
    <section className={styles.container_benefits}>
      <h1 className={styles.title}>O que você ganha sendo Fast Premium</h1>

      <div className={`${styles.container_benefits_desktop} ${styles.noneDesktop}`}>
        <div>
          {benefistListColumnFirst.map((benefitFirst, index) => (
            <div className={styles.benefits} key={index}>
              <div>
                <Icon path={benefitFirst.icon} size={2} color={'#3e5e3f'} />
                <span>{benefitFirst.title}</span>
                <p className={styles.description}>{benefitFirst.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          {benefitsColumnSecond.map((benefitSecond, index) => (
            <div className={styles.benefits} key={index}>
              <div>
                <Icon path={benefitSecond.icon} size={2} color={'#3e5e3f'} />
                <span>{benefitSecond.title}</span>
                <p className={styles.description}>{benefitSecond.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {benefitsList.map((benefit, index) => (
        <div className={`${styles.benefits} ${styles.noneMobile}`} key={index}>
          <div className={styles.benefits_title}>
            <Icon path={benefit.icon} size={2} color={'#3e5e3f'}/>
            <span>{benefit.title}</span>
          </div>
          <p className={styles.benefits_description}>{benefit.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Benefits;