import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MessageSquareCheck } from '@styled-icons/boxicons-regular';
import { MessageSquareX } from '@styled-icons/boxicons-regular';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 80px;
  background: ${({ issuccess }) => (issuccess ? '#4bb543' : '#ff9494')};
  top: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  z-index: -100;
  opacity: 0;
  padding: 0 10px;
  animation: show 0.3s linear 0.3s forwards;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    width: 40px;
    height: 100%;

    svg {
      height: 100%;
      fill: white;
    }
  }

  .messageInfo {
    color: white;
    margin-left: 10px;
  }

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -100%);
    }
  }
`;

export default function SendMessageModal({ isSuccess, setToggleModal }) {
  useEffect(() => {
    const hideModal = () => {
      setTimeout(() => {
        setToggleModal(false);
      }, 3000);
    };

    hideModal();

    return () => {
      clearTimeout(hideModal);
    };
  }, []);

  return (
    <Container issuccess={isSuccess}>
      <div className="icon">
        {isSuccess ? <MessageSquareCheck /> : <MessageSquareX />}
      </div>
      {isSuccess ? (
        <p className="messageInfo">Wiadomość została wysłana!</p>
      ) : (
        <p className="messageInfo">Błąd podczas wysyłania wiadomości!</p>
      )}
    </Container>
  );
}
