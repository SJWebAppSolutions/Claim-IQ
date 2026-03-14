import { useEffect, useState } from 'react';

const scrollToTopController = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 230);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return {
    scrollTop,
    show
  };
};

export default scrollToTopController;
