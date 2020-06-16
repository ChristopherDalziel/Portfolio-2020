import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { startLogin, startLogout } from "../../actions/auth";
import backgroundImage from "../../assets/Web_Background.png";
import { history } from "../../routers/AppRouter";

const LoginContainer = styled.main`
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.a`
  font-family: "Open Sans", sans-serif;
  background-color: #ef636c;
  border: none;
  color: white;
  padding: 12px 15px;
  cursor: pointer;
  font-size: 15px;
  margin: 50px;
  &:hover {
    background: #a8b7ab;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }
`;

export const AdminPage = ({ isAuthenticated, startLogin, startLogout }) => {
  return (
    <LoginContainer>
      {isAuthenticated ? (
        <>
          <Button onClick={startLogout}>Logout</Button>
          <br />
          ||
          <br />
          <Button
            onClick={() => {
              history.push("/createproject");
            }}
          >
            Create new project
          </Button>
        </>
      ) : (
        <Button onClick={startLogin}>Login</Button>
      )}
    </LoginContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLogout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
