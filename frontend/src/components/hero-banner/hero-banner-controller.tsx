import axios from "axios";
import { useEffect, useState } from "react";

const heroBannerController = () => {

  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/home/hero-banner`)
      .then((res) => setPageData(res?.data))
      .finally(() => setLoading(false));
  }, []);

   return {
    pageData:pageData?.data,
    loading
  };
};

export default heroBannerController;
