import React from "react";
import classes from "./MenuWrap.module.scss";

// import { Container } from './styles';

function MenuWrap({ isOpen }) {
  return (
    <div className={`${classes.MenuWrap} ${isOpen ? classes.show : ""}`}>
      <nav className={classes.menu}>
        <div className={classes.linkList}>
          <a href="#home" className={classes.move}>
            HOME
          </a>
          <br />
          <a href="#portfolio" className={classes.move}>
            PORTFÓLIO
          </a>
          <br />
          <a href="#about" className={classes.move}>
            ABOUT
          </a>
          <br />
          <a href="#skills" className={classes.move}>
            SKILLS
          </a>
          <br />
          <a href="#contact" className={classes.move}>
            CONTACT
          </a>
        </div>
      </nav>
    </div>
  );
}

export default MenuWrap;
