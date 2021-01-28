import React from "react";
import classes from "./Sobre.module.scss";

// import { Container } from './styles';

function Sobre() {
  return (
    <>
      <div id="about" className={classes.sobre}>
        <div>
          <div className={classes.iconsHeading}>
            <h1>SOBRE MIM</h1>
          </div>
          <h2 className={classes.descricao}>
            Sou Wilka Galli, uma programadora Front-End morando atualmente em
            Portugal. Sou graduada em Direito, mas após 7 anos de carreira
            resolvi mudar de profissão e expandir os horizontes para fazer
            coisas novas e descobri esse novo mundo de tecnologia :) Com a ajuda
            e motivação do meu marido (profissional da área a quase 10 anos)
            iniciei e concluí cursos online de desenvolvimento web. Confesso que
            ter um tutor particular para me ajudar nos conceitos de arquitetura
            e mais questões centrais sobre o mundo da programação ajudou
            bastante. Meu objetivo é conseguir um emprego do zero e construir e
            crescer uma carreira na área de tecnologia, meu foco é o
            desenvolvimento front-end pois foi a area que mais me identifiquei
            na tecnologia e pessoalmente sou uma pessoa muito detalhada!
          </h2>
        </div>

        <img src="./assets/foto.png"></img>
      </div>
    </>
  );
}

export default Sobre;
