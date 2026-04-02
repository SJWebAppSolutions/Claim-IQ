import { lazy } from 'react';
import './index.css';
const HomePage = lazy(() => import('./home'));
const AboutPage = lazy(() => import('./about-us'));
const ContactPage = lazy(() => import('./contact-us'));
const ServicePage = lazy(() => import('./service'));
const ReferalAPracticePage = lazy(() => import('./refer-a-practice'));
const BlogPage = lazy(() => import('./blog'));
const PrivacyPolicyPage = lazy(() => import('./privacy-policy'));



export { HomePage, AboutPage, ContactPage, ServicePage, ReferalAPracticePage, BlogPage,PrivacyPolicyPage };
