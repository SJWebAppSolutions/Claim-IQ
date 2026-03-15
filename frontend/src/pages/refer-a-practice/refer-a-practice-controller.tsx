import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

type ReferralFormData = {
  yourName: string;
  yourEmail: string;
  yourPhone?: string;
  practiceName: string;
  contactPersonName: string;
  theirEmail: string;
  theirPhone?: string;
  notes?: string;
};

const referAPracticeController = () => {
  const [formData, setFormData] = useState<ReferralFormData>({
    yourName: '',
    yourEmail: '',
    yourPhone: '',
    practiceName: '',
    contactPersonName: '',
    theirEmail: '',
    theirPhone: '',
    notes: '',
  });
  const [loading, setLoading] = useState(false);
  const [pageData, setPageData] = useState<any>(null);
  const [formLoading, setFormLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/referral`)
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

    const referralData = {
      ...formData,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/referral/message`,
        referralData
      );

      const data = res.data;

      if (data.success) {
        toast.success('Message sent successfully ✅');
        setFormData({
          yourName: '',
          yourEmail: '',
          yourPhone: '',
          practiceName: '',
          contactPersonName: '',
          theirEmail: '',
          theirPhone: '',
          notes: '',
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

  const breadcrumb = [
    { path: '/', label: 'Home' },
    { path: '/refer-pratice', label: 'Refer a Pratice' },
  ];

  return {
    breadcrumb,
    handleChange,
    handleSubmit,
    loading,
    pageData: pageData?.data,
    formData,
    formLoading
  };
};

export default referAPracticeController;
