import { Routes, Route } from 'react-router-dom';

import {
  HomePage,
  AboutPage,
  ContactPage,
  ServicePage,
  ReferalAPracticePage,
  BlogPage,
  PrivacyPolicyPage
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
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />

      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
