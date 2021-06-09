import React from 'react';
import styled from 'styled-components';
import Button from '../components/button';
import Section from '../components/section';
import Instagram from '../assets/instagram';
import Facebook from '../assets/facebook';

const StyledContact = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-auto-rows: minmax(240px, 1fr);
  align-content: center;
  box-shadow: -10px 10px 4px rgba(0, 0, 0, 0.25);
  background: #212121;
  padding: 20px;
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .box {
    text-align: center;

    p {
      font-size: 2rem;

      &.name {
        margin-bottom: 5px;
      }
    }

    &:nth-child(1) {
      margin-bottom: 10px;
    }
  }
`;

const ContactFormWrapper = styled.div`
  padding: 10px 20px;
  background: #333333;

  .formHeader {
    text-transform: uppercase;
    margin-bottom: 20px;
    text-align: center;

    @media (min-width: 530px) {
      text-align: left;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
      display: flex;
      flex-direction: column;
      flex: 1;
      width: 100%;
      margin-bottom: 10px;

      span {
        text-transform: uppercase;
      }

      input,
      textarea {
        border: none;
        border-bottom: 1px solid #cecece;
        background: transparent;
        color: white;
      }

      input {
        height: 30px;
      }

      &:last-of-type {
        margin-bottom: 20px;
      }
    }
  }
`;

export default function Contact() {
  return (
    <Section title="kontakt">
      <StyledContact>
        <ContactInfoWrapper>
          <div className="box phone">
            <p className="name">Telefon</p>
            <p className="content">000-000-000</p>
          </div>
          <div className="box email">
            <p className="name">E-mail</p>
            <p className="content">mail@mail.com</p>
          </div>
        </ContactInfoWrapper>
        <ContactFormWrapper>
          <h3 className="formHeader">Zapraszamy do kontaktu</h3>
          <form>
            <label>
              <span>imię</span>
              <input type="text" />
            </label>
            <label>
              <span>telefon</span>
              <input type="text" />
            </label>
            <label>
              <span>e-mail</span>
              <input type="text" />
            </label>
            <label>
              <span>wiadomość</span>
              <textarea rows="5" />
            </label>
            <Button secondary>Wyślij wiadomość</Button>
          </form>
        </ContactFormWrapper>
      </StyledContact>
    </Section>
  );
}
