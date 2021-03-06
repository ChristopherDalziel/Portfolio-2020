import React from "react";
import styled from "@emotion/styled";
import footerBackground from "../assets/Web_Background.png";

import {
  faTwitter,
  faLinkedinIn,
  faGithub,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  max-width: 100vw;
  height: 10%;
  width: 100%;
  padding-bottom: 8px;
  @media (max-width: 1024px) {
    background-color: white;
    height: 4%;
  }
  @media (max-width: 950px) {
    background-image: url(${footerBackground});
    height: 6vh;
  }
`;

const FooterLinks = styled.a`
  display: flex;
  align-items: flex-end;
  margin: 5px;
  color: #493a37;
  font-size: 40px;
  margin-left: 8px;
  &:hover {
    color: #a8b7ab;
    -webkit-transition: color 0.3s ease-in-out;
    -moz-transition: color 0.3s ease-in-out;
    transition: color 0.3s ease-in-out;
  }
  @media (max-width: 1024px) {
    margin: 0;
    margin-left: 8px;
    font-size: 34px;
  }
`;

const FooterComponent = () => {
  return (
    <Footer>
      <FooterLinks target="_blank" href="https://twitter.com/dalziel_chris">
        <FontAwesomeIcon icon={faTwitter} />
      </FooterLinks>
      <FooterLinks
        target="_blank"
        href="https://www.linkedin.com/in/christopher-dalziel-129427187/"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </FooterLinks>
      <FooterLinks target="_blank" href="https://github.com/ChristopherDalziel">
        <FontAwesomeIcon icon={faGithub} />
      </FooterLinks>
      <FooterLinks
        target="_blank"
        href="https://codepen.io/christopherdalziel/pens/public"
      >
        <FontAwesomeIcon icon={faCodepen} />
      </FooterLinks>
    </Footer>
  );
};

export default FooterComponent;
