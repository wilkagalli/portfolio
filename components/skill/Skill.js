import React from "react";
import classes from "./Skill.module.scss";

// import { Container } from './styles';

function Skill() {
  return (
    <>
      <div id="skills" className={classes.skills}>
        <div className={classes.separador}></div>
        <div>
          <div className={classes.iconsHeading}>
            <h1>SKILLS</h1>
          </div>
          <h2 className={classes.descricao}>
            Estou sempre buscando mais conhecimento e lendo sobre as áreas
            envolvidas com meu dia a dia, tentando incorporar novas tecnologias
            e métodos conforme as minhas necessidades e dos projetos.
          </h2>
          <ul>
            <li>Git</li>
            <li>Angular</li>
            <li>React</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>Designer Responsivo</li>
            <li>Front-End</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skill;
