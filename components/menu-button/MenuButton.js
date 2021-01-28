import React, { useEffect, useState } from "react";
import MenuWrap from "../menu-wrap/MenuWrap";
import classes from "./MenuButton.module.scss";

// import { Container } from './styles';

function MenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    addEventListener("click", (e) => {
      if (!e.target.className.includes("MenuButton")) {
        setIsOpen(false);
      }
    });
  });

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
