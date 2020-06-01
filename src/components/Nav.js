import React from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const Navigation = styled.nav`
  position: absolute;
  z-index: 1;
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
`;

const NavigationText = styled.a`
  padding: 3px 0px;
  margin: 0 28px;
  position: relative;
  letter-spacing: 2px;
  color: #493a37;
  &:hover {
    color: white;
    background: #a8b7ab;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }
`;

const NavComponent = () => {
  return (
    <Navigation>
      <NavigationText>
        <NavLink to="/">Home page</NavLink>
      </NavigationText>
      <NavigationText>
        <NavLink to="/about">About Me</NavLink>
      </NavigationText>
      <NavigationText>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </NavigationText>
      <NavigationText>
        <NavLink to="/codepen">Codepens</NavLink>
      </NavigationText>
      <NavigationText>
        <NavLink to="/contact">Contact Me</NavLink>
      </NavigationText>
    </Navigation>
  );
};

export default NavComponent;
