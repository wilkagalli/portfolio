import React from "react";
import classes from "./MenuWrap.module.scss";

// import { Container } from './styles';

function MenuWrap({ isOpen }) {
  return (
    <div className={`${classes.MenuWrap} ${isOpen ? classes.show : ""}`}>
      <nav className={classes.menu}>
        <div className={classes.linkList}>
          <a>HOME</a>
          <br />
          <a>PROJECTS</a>
          <br />
          <a>CONTACTS</a>
        </div>
      </nav>
    </div>
  );
}

export default MenuWrap;
