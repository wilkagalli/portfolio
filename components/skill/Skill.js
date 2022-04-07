import React from "react";
import classes from "./Skill.module.scss";

// import { Container } from './styles';

function Skill() {
  return (
    <>
      <div id="skills" className={classes.skills}>
        <div className={classes.separador}>
          <div className={classes.iconsHeading}>
            <h1>FORMAÇÕES</h1>
            <ul className={classes.medal}>
              <li>
                <a
                  target="_blank"
                  href="https://cursos.alura.com.br/certificate/50eb6bf0-df96-4048-a0f5-c74a4544212f"
                >
                  FUNDAMENTOS JAVASCRIPT: Objetos
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://cursos.alura.com.br/certificate/16ed16aa-8843-4561-977b-3b3708aac6a6"
                >
                  FUNDAMENTOS JAVASCRIPT: Tipos, Variáveis e Funções
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://cursos.alura.com.br/certificate/a1475120-76ee-49c3-977b-8904243c5fcc"
                >
                  JAVASCRIPT: Programando a orientação a objetos
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://cursos.alura.com.br/certificate/028320e0-35dc-482d-9691-de294d18c685"
                >
                  HTML5 E CSS3 PARTE 1: A primeira página na Web
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://cursos.alura.com.br/certificate/bb4358b0-7ee8-448b-b0c2-d78a37709304"
                >
                  REACT: Entendendo como a biblioteca funciona
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://cursos.alura.com.br/certificate/d35dcf10-1885-4de4-a4a3-fb9a14922fe3"
                >
                  LÓGICA DE PROGRAMAÇÃO I: Os primeiros programas com Javascript
                  e HTML
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  href="https://cursos.alura.com.br/user/galliwilka/fullCertificate/c24791ebf4b2d11437a6f9ac2b860768"
                >
                  VER TODAS AS FORMAÇÕES...
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className={classes.iconsHeading}>
            <h1>SKILLS</h1>
          </div>
          <h2 className={classes.descricao}>
            Estou sempre buscando mais conhecimento e lendo sobre as áreas
            envolvidas com meu dia a dia, tentando incorporar novas tecnologias
            e métodos conforme as minhas necessidades e dos projetos.
          </h2>
          <ul className={classes.badge}>
            <li>Git</li>
            <li>Angular</li>
            <li>React</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Designer Responsivo</li>
            <li>Front-End</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skill;
