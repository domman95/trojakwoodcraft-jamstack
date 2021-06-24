import React, { useState } from 'react';
import SEO from './SEO';
import { GlobalStyle } from '../globalStyle';
import Navbar from './navbar';
import Context from '../context';
import Footer from '../components/footer';

export default function Layout({ children, animation }) {
  const [showLogo, setShowLogo] = useState(false);

  return (
    <Context.Provider value={{ showLogo, setShowLogo }}>
      <GlobalStyle />
      <SEO />
      <Navbar showLogo={showLogo} animation={animation} />
      {children}
      <Footer />
    </Context.Provider>
  );
}
