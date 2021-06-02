import React from 'react';
import SEO from './SEO';
import { GlobalStyle } from '../globalStyle';
import Navbar from './navbar';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <SEO />
      <Navbar />
      <div className="container">{children}</div>
    </>
  );
}
