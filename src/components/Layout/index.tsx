import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

export interface LayoutProps {
  mainPage?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, mainPage = false }) => {
  return (
    <>
      <Header mainPage={mainPage} />
      <main>{children}</main>
      <Footer mainPage={mainPage} />
    </>
  );
};

export default Layout;
