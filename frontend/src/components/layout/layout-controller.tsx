import axios from 'axios';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    if (!pageData?.script?.head) return;

    pageData.script.head.forEach((script: string, index: number) => {
      
      if (document.querySelector(`[data-dynamic-script="${index}"]`)) return;

      const temp = document.createElement('div');
      temp.innerHTML = script;

      const scriptTag = temp.querySelector('script');
      if (!scriptTag) return;

      const newScript = document.createElement('script');
      newScript.setAttribute('data-dynamic-script', index.toString());

      if (scriptTag.src) {
        newScript.src = scriptTag.src;
        newScript.defer = true;
      } else {
        newScript.innerHTML = scriptTag.innerHTML;
      }

      document.head.appendChild(newScript);
    });
  }, [pageData]);

  return { pageData, loading };
};

export default useLayoutController;
