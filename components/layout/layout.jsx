import React from 'react';
import MainNav from './main-nav';

const Layout = ({ children }) => {
  return (
    <>
      <MainNav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
