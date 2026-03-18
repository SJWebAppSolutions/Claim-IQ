import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const serviceController = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const serviceRef = useRef<HTMLDivElement | null>(null);
  const [showContact, setShowContact] = useState(false);
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/service`)
      .then((res) => setPageData(res?.data))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const el = serviceRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowContact(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [serviceRef,pageData]);
  
   useEffect(() => {
    if (!loading && pageData) {
      const index = location?.state?.index;

      if (index !== undefined) {
        const el = document.getElementById(`service-${index}`);

        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: 'start' });
          }, 200);
        }
      }
    }
  }, [loading, pageData, location.state]);

  const breadcrumb = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Service' },
  ];

  return {
    breadcrumb,
    pageData: pageData?.data,
    loading,
    serviceRef,
    showContact,
  };
};

export default serviceController;
