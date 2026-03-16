import { Routes, Route } from 'react-router-dom';

import {
  HomePage,
  AboutPage,
  ContactPage,
  ServicePage,
  ReferalAPracticePage,
  BlogPage,
} from '../pages';
import { Layout } from '../components/layout';
import NotFoundPage from '../pages/404';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutPage />} />
        <Route path="contact-us" element={<ContactPage />} />
        <Route path="services" element={<ServicePage />} />
        <Route path="refer-practice" element={<ReferalAPracticePage />} />
        <Route path="blog" element={<BlogPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
