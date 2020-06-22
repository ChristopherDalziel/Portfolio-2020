import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const BurgerMenu = styled.nav`
  background-color: #beb6af;
  padding-top: 5vh;
  width: 98vw;
  height: 76vh;
  position: absolute;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;
`;

const BurgerIconHover = styled.div`
  margin: 0 0 0 5px;
  position: absolute;
  font-size: 30px;
  @media (min-width: 820px) {
    display: none;
`;

const BurgerText = styled.p`
  font-size: 16px;

  color: #483736;
  text-transform: uppercase;
  text-align: center;
  transition: color 0.3s ease;
`;

const MobileNav = () => {
  const [menuDisplayed, setMenuDisplayed] = useState(false);

  return (
    <BurgerIconHover
      onMouseEnter={() => setMenuDisplayed(true)}
      onMouseLeave={() => setMenuDisplayed(false)}
    >
      <FontAwesomeIcon icon={faBars} />
      {menuDisplayed ? (
        <BurgerMenu>
          <BurgerText>
            <NavLink onClick={() => setMenuDisplayed(false)} to="/">
              Home page.
            </NavLink>
          </BurgerText>
          <br />
          <BurgerText>
            <NavLink onClick={() => setMenuDisplayed(false)} to="/about">
              About Me.
            </NavLink>
          </BurgerText>
          <br />

          <BurgerText>
            <NavLink onClick={() => setMenuDisplayed(false)} to="/portfolio">
              Portfolio.
            </NavLink>
          </BurgerText>
          <br />

          {/* <BurgerText>
            <NavLink to="/codepen">Codepens</NavLink>
          </BurgerText>
          <br /> */}

          <BurgerText>
            <NavLink onClick={() => setMenuDisplayed(false)} to="/contact">
              Contact Me.
            </NavLink>
          </BurgerText>
        </BurgerMenu>
      ) : null}
    </BurgerIconHover>
  );
};

export default MobileNav;
