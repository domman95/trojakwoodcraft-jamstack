import React from 'react';
import Section from '../components/section';
import Error404 from '../assets/Error404';
import { Link } from '@reach/router';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding-top: 70px;

  .headerError {
    margin: 20px 0;
  }

  .linkError {
    margin-top: 20px;
    text-decoration: underline;
  }
`;

const NotFoundPage = () => {
  return (
    <>
      <Section>
        <Container>
          <div className="404">
            <Error404 />
          </div>
          <h3 className="headerError">Upsss!</h3>
          <p className="textErrors">Coś poszło nie tak.</p>
          <p className="textErrors">
            Nie możemy znaleźć strony, której szukasz.
          </p>
          <Link className="linkError" to="/">
            wróć na stronę główną
          </Link>
        </Container>
      </Section>
    </>
  );
};

export default NotFoundPage;
