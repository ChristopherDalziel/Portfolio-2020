import React from "react";
import styled from "@emotion/styled";

const ContactContent = styled.div`
  margin: 200px 200px 0px 200px;
`;

const ContactInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  margin: 0 0 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  &:focus {
    outline: 0;
    border-bottom: 1px solid #ef626b;
  }
`;

const ContactTextArea = styled.textarea`
  border: none;
  height: 100px;
  width: 100%;
  max-width: 100%;
  resize: none;
  background: transparent;
  &:focus {
    outline: 0;
    border: 1px solid #ef626b;
  }
`;

const ContactButton = styled.button`
  cursor: pointer;
  width: 100%;
  border: none;
  background: #a8b7ab;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;
  &:hover {
    background: #ef626b;
    -webkit-transition: background 0.3s ease-in-out;
    -moz-transition: background 0.3s ease-in-out;
    transition: background-color 0.3s ease-in-out;
  }
`;

const ContactHeading = styled.h1`
  text-align: center;
  color: #493a37;
`;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <ContactContent>
        <ContactHeading>CONTACT ME.</ContactHeading>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xwkrbyzo"
          method="POST"
        >
          <label>Name:</label>
          <ContactInput
            autoFocus
            required
            placeholder="Your name"
            type="name"
            name="name"
          />
          <label>Email:</label>
          <ContactInput
            placeholder="Your Email Address"
            required
            type="email"
            name="email"
          />
          <label>Phone number:</label>
          <ContactInput
            placeholder="Your Phone Number (optional)"
            type="number"
            name="number"
          />
          <label>Message:</label>
          <ContactTextArea
            required
            placeholder="Type your message here...."
            type="text"
            name="message"
          />
          {status === "SUCCESS" ? (
            <p>Thankyou! I will be in contact with you soon.</p>
          ) : (
            <ContactButton>Submit</ContactButton>
          )}
          {status === "ERROR" && (
            <p>An error has occured, your email has not been submitted.</p>
          )}
        </form>
      </ContactContent>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default ContactForm;
