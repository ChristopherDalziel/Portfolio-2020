import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { startLogin } from "../../actions/auth";

const LoginContainer = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.a`
  font-family: "Open Sans", sans-serif;
  background-color: #ef636c;
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

export const LoginPage = ({ startLogin }) => {
  return (
    <LoginContainer>
      <LoginButton onClick={startLogin}>Admin Login</LoginButton>
      <p>
        : If you've found this page and you're not an admin please return to the
        rest of my portfolio by using the navigation above.
      </p>
    </LoginContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
