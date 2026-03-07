import Header from '../header';
import Footer from '../footer';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { ScrollToTop } from '../scroll-to-top';

const Layout = () => {

  
  return (
    <>
      <Header />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default React.memo(Layout);
