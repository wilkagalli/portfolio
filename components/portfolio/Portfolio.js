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
                    href="https://mymovies-six.vercel.app/home"
                    target="_blank"
                  >
                    Site Movies
                  </a>
                </li>
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
        </div>
      </section>
    </>
  );
}

export default Portfolio;
