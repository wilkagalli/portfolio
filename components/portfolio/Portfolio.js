import React from "react";
import classes from "./Portfolio.module.scss";

// import { Container } from './styles';

function Portfolio() {
  return (
    <>
      <section id="portfolio" className={classes.portfolio}>
        <div className={classes.mask}></div>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.section}>
              <h1>PORTFÓLIO</h1>
              <ul>
                <li>
                  <a
                    href="https://website-steel-two.vercel.app/"
                    target="_blank"
                  >
                    Web Site - BLOG
                  </a>
                </li>
                <li>
                  <a href="https://barber-zeta.vercel.app/" target="_blank">
                    Barbearia
                  </a>
                </li>
                <li>
                  <a
                    href="https://architecture-ruddy.vercel.app/"
                    target="_blank"
                  >
                    Arquitetura
                  </a>
                </li>
                <li>
                  <a
                    href="https://todolist-inky-five.vercel.app/"
                    target="_blank"
                  >
                    Todo List
                  </a>
                </li>
                <li>
                  <a href="https://typer-fawn.vercel.app/" target="_blank">
                    Typer - Game
                  </a>
                </li>
                <li>
                  <a href="https://aluracopy.vercel.app/" target="_blank">
                    Alura
                  </a>
                </li>
                <li>
                  <a href="https://doctorform.vercel.app/" target="_blank">
                    Doctor Form
                  </a>
                </li>
                <li>
                  <a href="https://workshop-mu.vercel.app/" target="_blank">
                    Workshop
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.gifs}>
            <div className={classes.project}>
              <img width="350" height="600" src="/assets/animated.gif"></img>
              <div className={`${classes.textProject} ${classes.green}`}>
                <h1>TopCasaFina Arquitetura</h1>
                <p>
                  Esse foi um projeto desenvolvido em um dos cursos. Trata-se de
                  uma pagina para uma empresa de arquitetura em que permite ver
                  os trabalhos desenvolvidos pela empresa, bem como permite o
                  usuário fazer um cadastro para solicitar informações.
                </p>
                <a
                  target="_blank"
                  href="https://architecture-ruddy.vercel.app/"
                >
                  →
                </a>
              </div>
            </div>
            <div className={classes.project}>
              <img
                width="350"
                height="600"
                src="/assets/Webp.net-gifmaker.gif"
              ></img>
              <div className={`${classes.textProject} ${classes.pink}`}>
                <h1>Web Site - BLOG</h1>
                <p>
                  Esse é um projeto pessoal para testar os conhecimentos
                  adquiridos no curso, no qual apliquei as técnicas de navegação
                  entre páginas, coloquei um carousel e vídeo na página
                  principal. Bem como a possibilidade de filtras receitas e
                  também coloquei botões para curtir e comentar.
                </p>
                <a target="_blank" href="https://website-steel-two.vercel.app/">
                  →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
