import axios from "axios";
import { useEffect, useState } from "react";

const serviceController = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/service`)
      .then((res) => setPageData(res?.data))
      .finally(() => setLoading(false));
  }, []);

  const breadcrumb = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Service' },
  ];

  return {
    breadcrumb,
    pageData:pageData?.data,
    loading
  };
};

export default serviceController;
