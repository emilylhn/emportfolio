import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundimage from '../images/backgroundimage.jpg'

const ContactFormContainer = styled.div`
  padding: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to top, transparent, #FAC9B6), url(${backgroundimage});
  background-size: cover;
  background-position: center;
  font-family: 'Poppins', sans-serif;
  color: #02776f;

  label {
    margin-bottom: 5px;
  }

  input,
  textarea {
    margin-bottom: 10px;
    padding: 10px;
    width: calc(100% - 20px);
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  textarea {
    height: 100px;
  }

  span {
    color: red;
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-family: 'Fraunces', serif;
  font-style: italic;
  font-weight: normal;
  color: #02776F;
  font-size: 3rem;
`;

const SubmitButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #02776F;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #014C46;
  }
`;

const ConfirmationMessage = styled.p`
  text-align: center;
  font-family: 'Poppins', sans-serif;
  color: #02776f;
`;

const Input = styled.input`
`;

const MessageInput = styled.textarea`
`;

const ContactSection = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
    const [errors, setErrors] = useState({});
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      setSubmitting(true);
  
      try {
        const response = await fetch('https://formspree.io/f/xnqkynqv', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, message }),
        });
  
        if (response.ok) {
          setSucceeded(true);
        } else {
          setErrors({ submit: 'There was an error submitting your form.' });
        }
      } catch (error) {
        console.error('Error:', error);
        setErrors({ submit: 'There was an error submitting your form.' });
      } finally {
        setSubmitting(false);
      }
    };
  
    return (
      <ContactFormContainer>
        <Title>Contact Me</Title>
        {succeeded ? (
          <>
            <ConfirmationMessage>Thanks for your message!</ConfirmationMessage>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <Input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            {errors && <span>{errors.email}</span>}
  
            <label htmlFor="message">Message</label>
            <MessageInput
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            {errors && <span>{errors.message}</span>}
  
            {errors && <span>{errors.submit}</span>}
  
            <SubmitButton type="submit" disabled={submitting}>
              Submit
            </SubmitButton>
          </form>
        )}
        <p>Send me an email directly at emlawhorn@outlook.com</p>
      </ContactFormContainer>
    );
  };

  export default ContactSection;