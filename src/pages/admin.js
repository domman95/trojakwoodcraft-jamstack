import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: var(--bgcColor);
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: white;
    text-transform: uppercase;
    text-align: center;
  }
`;

export default function Admin() {
  const isBrowser = typeof window === 'object';

  useEffect(() => {
    if (!isBrowser) return null;
    if (isBrowser) {
      navigate('https://trojakwoodcraft.admin.datocms.com/', { replace: true });
    }
  }, []);
  return (
    <Layout>
      <Container>
        <h2>Jesteś przenoszony na stronę swojego dostawcy treści!</h2>
      </Container>
    </Layout>
  );
}
