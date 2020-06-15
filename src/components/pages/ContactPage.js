import React from "react";
import styled from "@emotion/styled";
import ContactForm from "../ContactForm";
import backgroundImage from "../../assets/Web_Background.png";

const ContactContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  height: 100vh;
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactForm />
    </ContactContainer>
  );
};

export default ContactPage;
