import React from "react";
import ContactForm from "../ContactForm";
import styled from "@emotion/styled";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  height: 80%;
`;

const ContactPage = () => {
  return (
    <ContactContainer>
      <ContactForm />
    </ContactContainer>
  );
};

export default ContactPage;
