import React from "react";
import classes from "./Footer.module.scss";

// import { Container } from './styles';

function Footer() {
  return (
    <>
      <div className={classes.Footer}>
        <div className={classes.grayDivide}></div>
        <div className={classes.contactBkg}>
          <div className={classes.contactCol}>
            <div className={classes.imgMidia}>
              <img src="/assets/midia-social.png"></img>
            </div>
            <div>
              <h6 id="contact">Mídia Social</h6>

              <div className={classes.contactDivide}></div>
              <div className={classes.socialCol}>
                <a href="https://www.facebook.com/wilka.galli/">Facebook</a>
                <br />
                <a href="https://www.linkedin.com/in/wilkagalli/">Linkedin</a>
              </div>
              <div className={classes.socialCol}>
                <a href="https://www.instagram.com/wilkagalli/">Instagram</a>
                <br />
                <a href="https://www.youtube.com/channel/UCmpXoBZgHT9T0snnZk4l4aw">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footerBkg}>
        Feito com &nbsp;
        <svg
          version="1.1"
          id="heart"
          x="0px"
          y="0px"
          width="20px"
          height="17.982px"
          viewBox="0 0 20 17.982"
          enable-background="new 0 0 20 17.982"
        >
          <path
            id="path"
            d="M9.212,16.975c-0.431-0.482-1.505-1.422-2.389-2.089c-2.617-1.977-2.973-2.263-4.036-3.241
	C0.829,9.841-0.003,8.029,0,5.571C0.001,4.372,0.083,3.91,0.419,3.203c0.57-1.199,1.41-2.091,2.483-2.636
	c0.76-0.386,1.135-0.558,2.404-0.565c1.328-0.007,1.607,0.147,2.389,0.577C8.646,1.101,9.624,2.217,9.827,3.01L9.952,3.5
	l0.308-0.674c1.741-3.812,7.3-3.755,9.234,0.094c0.613,1.221,0.681,3.829,0.137,5.298c-0.71,1.916-2.043,3.376-5.125,5.614
	c-2.021,1.469-4.309,3.689-4.468,4.001C9.853,18.195,10.029,17.89,9.212,16.975z"
          ></path>
        </svg>
        &nbsp; no Porto - PT © 2021
      </div>
    </>
  );
}

export default Footer;
