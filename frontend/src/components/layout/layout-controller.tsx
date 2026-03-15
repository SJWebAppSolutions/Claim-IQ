import axios from "axios";
import { useEffect, useState } from "react";

const useLayoutController = () => {
  const [pageData, setPageData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/layout`)
      .then((res) => setPageData(res?.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return { pageData, loading };
};

export default useLayoutController;