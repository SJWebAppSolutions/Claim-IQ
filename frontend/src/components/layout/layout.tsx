import { Header } from '../header';
import { Footer } from '../footer';
import { Outlet } from 'react-router-dom';
import React from 'react';
import { ScrollToTop } from '../scroll-to-top';
import useLayoutController from './layout-controller';

const Layout = () => {
  const { pageData, loading } = useLayoutController();

  if (loading) return null;

  return (
    <>
      <Header pageData={pageData}/>
      <main className="page-content">
        <Outlet />
      </main>
      <Footer pageData={pageData}/>
      <ScrollToTop />
    </>
  );
};

export default React.memo(Layout);
