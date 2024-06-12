import styles from './maincontent.module.css';
import habilits from '../assets/IMG/habilits2.png';

export default function MainContent() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.sectionHead}>
        <img src="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png?authuser=0&hl=pt-BR" alt="Imagem Pequena" className={styles.smallImage} />
        <div className={styles.mainTitle}>
          <h1>Marcos Paratella</h1>
          <h2 className={styles.subtitle}>Programador FullStack</h2>
        </div>
      </div>
      <h1 className={styles.sectionTitle}>Sobre</h1>
      <p className={styles.paragraph}>Estou avançando de forma sólida e contínua na área de Análise e Desenvolvimento de Sistemas da Informação, com o objetivo de me tornar um programador Fullstack ou Backend, e talvez até ultrapassar a média. A paixão por resolver problemas e criar soluções inovadoras é o motor que impulsiona meu crescimento e aprimoramento constantes. Acredito que, mesmo aos 47 anos, é possível reinventar-se e buscar novos horizontes na carreira, especialmente em um campo tão dinâmico e inovador como a programação.</p>
      <div>
      <a href="https://github.com/devParatella?tab=repositories" target='_blank' className={styles.link}>Repositórios</a>
      <a href="https://github.com/devParatella/simplepage" target='_blank' className={styles.link}>@Último Projeto</a>
      </div>
      <hr className={styles.divider} />
      <h1 className={styles.bottomTitle}>Mais Informações</h1>
      <div className={styles.secondContent}>
        <img src={habilits} alt="Imagem Inferior" className={styles.bottomImage} />
        <section className={styles.sectionHabilits}>
          <div className={styles.cardHbilits}>
            <h3>Formação e Conhecimento:</h3>
            <ul>
              <li>Ensino Médio Completo,</li>
              <li>Curso Técnico em Informática,</li>
              <li>Curso de Programador FullStack em RPV, Senai</li>
            </ul>
          </div>
          <div className={styles.cardHbilits}>
            <h3>Atribuições no Emprego Atual (Bevile Hotel):</h3>
            <ul>
              <li>Atendimento ao público</li>
              <li>Gerenciamento de Reservas</li>
              <li>Resolução de Problemas</li>
              <li>Manutenção de Sistemas</li>
            </ul>
          </div>
          <div className={styles.cardHbilits}>
            <h3>Experiências Anteriores:</h3>
            <ul>
              <li>Técnico em Infraestrutura de TI (Atual)</li>
              <li>Assistente Administrativo(Singer do Brasil)</li>
            </ul>
          </div>
          <div className={styles.cardHbilits}>
            <h3>Competências:</h3>
            <ul>
              <li>Comunicação interpessoal</li>
              <li>Gestão de tempo</li>
              <li>Proficiência em TI</li>
              <li>Flexibilidade e adaptabilidade</li>
            </ul>
          </div>
          <div className={styles.cardHbilits}>
            <h3>Adicional:</h3>
            <p>
              Disponível para estabelecer mais contatos e alternar com maior frequência
              parcerias educacionais e em projetos extracurriculares
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
