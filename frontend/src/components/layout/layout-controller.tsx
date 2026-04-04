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
  if (!pageData?.script) return;

  const injectScript = (scriptStr: string) => {

    const temp = document.createElement("div");
    temp.innerHTML = scriptStr;

    const scriptTag = temp.querySelector("script");
    if (!scriptTag) return;

    const newScript = document.createElement("script");

    if (scriptTag.src) {
      newScript.src = scriptTag.src;
      newScript.async = true;
    } else {
      newScript.textContent = scriptTag.innerHTML;
    }

    document.head.appendChild(newScript);
  };

  pageData.script.analytics?.forEach((script: string) => {
    injectScript(script);
  });

  pageData.script.metaPixel?.forEach((script: string) => {
    injectScript(script);
  });

}, [pageData]);

  return { pageData, loading };
};

export default useLayoutController;
