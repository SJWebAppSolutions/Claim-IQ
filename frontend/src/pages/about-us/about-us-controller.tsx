const aboutUsController = () => {
  const breadcrumb = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
  ];

  return {
    breadcrumb,
  };
};

export default aboutUsController;
