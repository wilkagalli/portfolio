import React from "react";
import classes from "./Header.module.scss";

// import { Container } from './styles';

function Header({ children }) {
  return (
    <>
      <div className={classes.Header}>{children}</div>
      <div className={classes.divide}></div>
    </>
  );
}

export default Header;
