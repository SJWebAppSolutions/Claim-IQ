// import AppRoutes from './routes/routes'; 
// import { Suspense } from 'react';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import ScrollToTop from './utils/scrollToTop';
import useTawk from './utils/chatScript';
import CmsDemoPage from './pages/cms-demo-page';

const App = () => {
  useTawk();
  
  return (
    <>
      {/* <ToastContainer position="top-right" autoClose={3000} />
      <ScrollToTop />
      <Suspense fallback={<div className="page-loading" />}>
        <AppRoutes />
      </Suspense> */}
      <CmsDemoPage />
    </>
  );
};

export default App;
