import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const BurgerMenu = styled.nav`
  background: pink;
  padding: 5px;
  position: absolute;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
  @media (min-width: 820px) {
    display: none;
`;

const BurgerText = styled.a`
  list-style-type: none;
  text-decoration: none;
  color: #232323;
  transition: color 0.3s ease;
`;

const MobileNav = () => {
  return (
    <BurgerMenu>
      <BurgerText>
        <NavLink to="/">Home page</NavLink>
      </BurgerText>
      <br />
      <BurgerText>
        <NavLink to="/about">About Me</NavLink>
      </BurgerText>
      <br />

      <BurgerText>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </BurgerText>
      <br />

      <BurgerText>
        <NavLink to="/codepen">Codepens</NavLink>
      </BurgerText>
      <br />

      <BurgerText>
        <NavLink to="/contact">Contact Me</NavLink>
      </BurgerText>
    </BurgerMenu>
  );
};

export default MobileNav;
