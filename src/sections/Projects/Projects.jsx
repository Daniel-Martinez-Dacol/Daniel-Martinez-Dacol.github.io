import styles from './ProjectsStyles.module.css';
import game from '../../assets/game.png';
import agenda from '../../assets/agenda.jpg';
import chess from '../../assets/chess.png';
import calculadora from '../../assets/calculadora.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projetos" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={game}
          link="https://github.com/Daniel-Martinez-Dacol/comp-grafica-trabalho"
          h3="Jogo"
          p="Computação grafica"
        />
        <ProjectCard
          src={agenda}
          link="https://github.com/Daniel-Martinez-Dacol/_eAgenda2.0"
          h3="e-Agenda"
          p="Agenda Virtual"
        />
        <ProjectCard
          src={chess}
          link="https://github.com/Daniel-Martinez-Dacol"
          h3="Xadrez"
          p="Xadrez virtual"
        />
        <ProjectCard
          src={calculadora}
          link="https://github.com/Daniel-Martinez-Dacol/CalculadoraTabajaraGrupo03"
          h3="Calculadora"
          p="Calculadora Virtual"
        />
      </div>
    </section>
  );
}

export default Projects;
