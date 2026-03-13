import { useState } from 'react';
// import Breadcrumb from '../../components/breadcrumb/breadcrumb';
// import referAPracticeController from './refer-a-practice-controller';

const ReferAPractice = () => {

  const [form, setForm] = useState({
    yourName: '',
    yourEmail: '',
    yourPhone: '',
    practiceName: '',
    contactPersonName: '',
    theirEmail: '',
    theirPhone: '',
    notes: '',
  });

  const handleChange = (e: any) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Referral submitted! Thank you.');
  };

  return (
    <>
      <section className="rp-hero">
        <div className="rp-hero-bg" />
        <div className="rp-hero-content">
          <h1 className="rp-hero-title">Refer a Practice</h1>
          <p className="rp-hero-sub">
            Know a dental practice that could benefit from simplified billing?
            Refer them to Claim IQ!
          </p>
        </div>
      </section>

      <div className="rp-body">
        <div className="rp-form-card">
          <form className="rp-form" onSubmit={handleSubmit}>
            <p className="rp-section-label">1. Your Information</p>

            <div className="rp-row">
              <input
                className="rp-input"
                type="text"
                name="yourName"
                placeholder="Your Name *"
                value={form.yourName}
                onChange={handleChange}
                required
              />
              <input
                className="rp-input"
                type="email"
                name="yourEmail"
                placeholder="Your Email *"
                value={form.yourEmail}
                onChange={handleChange}
                required
              />
            </div>

            <input
              className="rp-input"
              type="tel"
              name="yourPhone"
              placeholder="Your Phone"
              value={form.yourPhone}
              onChange={handleChange}
            />

            <p className="rp-section-label rp-section-gap">
              2. Referred Practice Information
            </p>

            <div className="rp-row">
              <input
                className="rp-input"
                type="text"
                name="practiceName"
                placeholder="Practice Name *"
                value={form.practiceName}
                onChange={handleChange}
                required
              />
              <input
                className="rp-input"
                type="text"
                name="contactPersonName"
                placeholder="Contact Person Name *"
                value={form.contactPersonName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="rp-row">
              <input
                className="rp-input"
                type="email"
                name="theirEmail"
                placeholder="Their Email *"
                value={form.theirEmail}
                onChange={handleChange}
                required
              />
              <input
                className="rp-input"
                type="tel"
                name="theirPhone"
                placeholder="Their Phone"
                value={form.theirPhone}
                onChange={handleChange}
              />
            </div>

            <textarea
              className="rp-textarea"
              name="notes"
              placeholder="Additional Notes (Optional)"
              value={form.notes}
              onChange={handleChange}
            />

            <button className="rp-submit" type="submit">
              Submit Referral
            </button>
          </form>
        </div>

        <div className="rp-info">
          <h2 className="rp-info-title">Why Refer Claim IQ?</h2>
          <p className="rp-info-intro">
            When you refer a practice to us, they will benefit from:
          </p>
          <ul className="rp-list">
            <li>Expert Dental Billing Services</li>
            <li>Accurate Insurance Claim Processing</li>
            <li>Faster Claim Submissions and Follow-Ups</li>
            <li>Improved Revenue Cycle Management</li>
            <li>Dedicated Billing Support</li>
          </ul>

          <h2 className="rp-info-title">Who Can Refer?</h2>
          <p className="rp-info-intro">
            Anyone can refer a practice to Claim IQ, including:
          </p>
          <ul className="rp-list">
            <li>Dental professionals</li>
            <li>Office managers</li>
            <li>Dental consultants</li>
            <li>Existing clients</li>
            <li>Industry partners</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default ReferAPractice;
