import React from "react";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { startLogin, startLogout } from "../../actions/auth";
import backgroundImage from "../../assets/Web_Background.png";
import { history } from "../../routers/AppRouter";
import Button from "../../utils/Button";

const LoginContainer = styled.main`
  background-image: url(${backgroundImage});
  background-size: cover;
  padding: 0 25% 0 25%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdminPage = ({ isAuthenticated, startLogin, startLogout }) => {
  return (
    <LoginContainer>
      {isAuthenticated ? (
        <>
          <Button handleClick={startLogout}>Logout</Button>
          <Button
            handleClick={() => {
              history.push("/createproject");
            }}
          >
            Create new project
          </Button>
        </>
      ) : (
        <Button handleClick={startLogin}>Login</Button>
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
