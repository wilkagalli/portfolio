import React, { useState } from "react";
import MenuWrap from "../menu-wrap/MenuWrap";
import classes from "./MenuButton.module.scss";

// import { Container } from './styles';

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MenuWrap isOpen={isOpen}></MenuWrap>

      <div className={classes.MenuButton}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={classes.hamburger}
        >
          <span></span>
        </button>
      </div>
    </>
  );
}

export default MenuButton;
