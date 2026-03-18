import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const twoColumnGridController = () => {

  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  
  const navigate = useNavigate();


  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/home/two-column-grid`)
      .then((res) => setPageData(res?.data))
      .finally(() => setLoading(false));
  }, []);

   return {
    pageData:pageData?.data,
    loading,
    navigate
  };
};

export default twoColumnGridController;
