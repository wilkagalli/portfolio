import React from "react";
import classes from "./Header.module.scss";

// import { Container } from './styles';

function Header({ children }) {
  return (
    <>
      <section id="home" className={classes.introduction}>
        <div className={classes.mask}></div>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.col}>
              <h1>
                <strong>wilka</strong>
                galli
              </h1>
              <img className={classes.arrow} src="/assets/down-arrow.png"></img>
            </div>
          </div>
        </div>
      </section>
      <div className={classes.Header}>{children}</div>
    </>
  );
}

export default Header;
