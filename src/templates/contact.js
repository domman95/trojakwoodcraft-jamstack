import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ContactForm from '../components/contactForm';
import Section from '../components/section';
import SendMessageModal from '../components/sendMessageModal';

const StyledContact = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(240px, 1fr);
  align-content: center;
  box-shadow: -10px 10px 4px rgba(0, 0, 0, 0.25);
  background: rgba(33, 33, 33, 0.8);
  backdrop-filter: blur(5px);
  padding: 20px;
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .box {
    text-align: center;

    .name {
      font-size: 2rem;
      margin-bottom: 5px;
    }

    .content {
      font-size: 2rem;
      text-decoration: underline;
    }

    &:nth-child(1) {
      margin-bottom: 10px;
    }
  }
`;

const ContactFormWrapper = styled.div`
  position: relative;
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
      padding: 5px 0;

      .errorMessage {
        color: #ff9494;
        margin-top: 5px;
      }

      &.recaptcha {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      span {
        text-transform: uppercase;
      }

      input,
      textarea {
        border: none;
        border-bottom: 1px solid #cecece;
        background: transparent;
        color: white;
        font-size: 16px;

        &:focus {
          outline: lime solid 1px;
        }
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
  const [isSuccess, setIsSuccess] = useState(null);
  const [toggleModal, setToggleModal] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      allDatoCmsContact {
        nodes {
          email
          phone
        }
      }
    }
  `);

  const { email, phone } = data.allDatoCmsContact.nodes[0];

  useEffect(() => {
    if (isSuccess !== null) setToggleModal(true);
  }, [isSuccess]);

  return (
    <Section id="kontakt" title="kontakt">
      <StyledContact>
        <ContactInfoWrapper>
          <div className="box phone">
            <p className="name">Telefon</p>
            <a className="content" href={`tel:${phone}`}>
              {phone}
            </a>
          </div>
          <div className="box email">
            <p className="name">E-mail</p>
            <a className="content" href={`mailto:${email}`}>
              {email}
            </a>
          </div>
        </ContactInfoWrapper>
        <ContactFormWrapper>
          <h3 className="formHeader">Zapraszamy do kontaktu</h3>
          <ContactForm setIsSuccess={setIsSuccess} />
          {toggleModal ? (
            <SendMessageModal
              isSuccess={isSuccess}
              setToggleModal={setToggleModal}
            />
          ) : null}
        </ContactFormWrapper>
      </StyledContact>
    </Section>
  );
}
