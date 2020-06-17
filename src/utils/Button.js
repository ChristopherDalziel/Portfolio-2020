import React from "react";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  font-family: "Open Sans", sans-serif;
  background-color: #ef636c;
  width: 100%;
  border: none;
  color: white;
  padding: 12px 15px;
  cursor: pointer;
  font-size: 15px;
  &:hover {
    background: #a8b7ab;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }
`;

const Button = ({ type = "button", handleClick, children }) => {
  return (
    <StyledButton type="true" onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
