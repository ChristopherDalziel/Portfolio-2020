import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import backgroundImage from "../../assets/Web_Background.png";

const ErrorMessage = styled.main`
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundPage = () => {
  return (
    <ErrorMessage>
      <Link to="/">
        {" "}
        I'm sorry, that page doesn't exist! Please click this link to go back to
        the homepage.
      </Link>
    </ErrorMessage>
  );
};

export default NotFoundPage;
