const blogController = () => {
  const breadcrumb = [
    { path: '/', label: 'Home' },
    { path: '/contact-us', label: 'Contact Us' },
  ];

  return { breadcrumb };
};

export default blogController;
