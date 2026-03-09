import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}
const useTawk = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      const script = document.createElement('script');
      script.async = true;
      script.src = import.meta.env.VITE_CHAT_URL;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');

      document.body.appendChild(script);

    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
};

export default useTawk;
