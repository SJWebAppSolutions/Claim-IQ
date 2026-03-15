import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const contantUsController = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [pageData, setPageData] = useState<any>(null);
  const [formLoading, setFormLoading] = useState(false);

  const breadcrumb = [
    { path: '/', label: 'Home' },
    { path: '/contact-us', label: 'Contact Us' },
  ];

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/contact`)
      .then((res) => setPageData(res?.data))
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    const contactData = {
      ...formData,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact/message`,
        contactData
      );

      const data = res.data;

      if (data.success) {
        toast.success('Message sent successfully ✅');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          telephone: '',
          message: '',
        });
      } else {
        toast.error('Failed to send message ❌');
      }
    } catch (error) {
      console.error('error', error);
      toast.error('Server error ❌');
    } finally {
      setFormLoading(false);
    }
  };

  return {
    breadcrumb,
    handleChange,
    handleSubmit,
    loading,
    pageData:pageData?.data,
    formData,
    formLoading,
  };
};

export default contantUsController;
