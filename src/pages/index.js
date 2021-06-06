import React from 'react';
import SEO from '../components/SEO';
import Layout from '../components/layout';
import Header from '../components/header';
import Main from '../components/main';
import styled from 'styled-components';

export default function HomePage() {
  return (
    <Layout>
      <SEO title="Strona Główna" />
      <Header />
      <Main />
    </Layout>
  );
}
