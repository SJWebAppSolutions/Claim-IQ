import { Routes, Route } from 'react-router-dom';

import { HomePage, AboutPage, ContactPage, ServicePage } from '../pages';
import { Layout } from '../components/layout';
import NotFoundPage from '../pages/404';

const AppRoutes = () => {
  return (
    <>
     <Routes>
      
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="services" element={<ServicePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />

    </Routes>
    </>
  );
};

export default AppRoutes;
