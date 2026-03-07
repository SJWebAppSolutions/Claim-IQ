import { lazy } from 'react';
import './index.css';
const HomePage = lazy(() => import('./home'));
const AboutPage = lazy(() => import('./about-us'));
const ContactPage = lazy(() => import('./contact-us'));
const ServicePage = lazy(() => import('./services'));


export { HomePage, AboutPage, ContactPage, ServicePage };
