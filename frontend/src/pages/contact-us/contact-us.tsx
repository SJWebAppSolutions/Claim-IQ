import { useState } from 'react';
// import Breadcrumb from '../../components/breadcrumb/breadcrumb';
// import contantUsController from './contact-us-controller';

const ContactPage = () => {
  // const { breadcrumb } = contantUsController();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    message: '',
  });

  const handleChange = (e: any) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message sent! We'll be in touch shortly.");
  };

  return (
    <>
      {/* {<Breadcrumb items={breadcrumb} />} */}

      <section className="cu-hero">
        <div className="cu-hero-bg" />
        <div className="cu-hero-content">
          <h1 className="cu-hero-title">Contact Us</h1>
          <p className="cu-hero-sub">
            Get in touch to schedule your free consultation and discover how we
            can simplify your billing.
          </p>
        </div>
      </section>

      <div className="cu-body">

        <div className="cu-left">
          <h2 className="cu-welcome-title">Welcome To Our Practice!</h2>
          <p className="cu-welcome-text">
            You can always reach the team by phone at 943-294-7296 or by using
            our contact form. If you would like to schedule a consultation,
            please use our online form or give us a call.
          </p>
          <p className="cu-welcome-text">
            Our team is committed to responding promptly and assisting you with
            any questions related to dental billing, insurance claims, or the
            services we provide. We strive to offer clear guidance, reliable
            support, and efficient solutions tailored to your practice's needs.
            We look forward to working with you and helping your practice
            operate more smoothly and effectively.
          </p>

          <div className="cu-info-row">
            <div className="cu-info-item">
              <div className="cu-info-icon">
                <img
                  src="https:res.cloudinary.com/dzvom7900/image/upload/v1773258529/contact_us_icon_y7wrwh.png"
                  alt="Contact"
                />
              </div>
              <div>
                <div className="cu-info-label">Contact</div>
                <div className="cu-info-value">943-294-7296</div>
              </div>
            </div>

            <div className="cu-info-item">
              <div className="cu-info-icon">
                <img
                  src="https:res.cloudinary.com/dzvom7900/image/upload/v1773258529/clock_contact_icon_eh4jaj.png"
                  alt="Hours"
                />
              </div>
              <div>
                <div className="cu-info-label">Hours</div>
                <div className="cu-info-value">Mon – Fri: 9:00am – 5:00pm</div>
              </div>
            </div>
          </div>
        </div>

        <div className="cu-form-card">
          <p className="cu-form-eyebrow">Have Questions?</p>
          <h3 className="cu-form-title">Send us a Message!</h3>

          <form className="cu-form" onSubmit={handleSubmit}>
            <div className="cu-form-row">
              <input
                className="cu-input"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
              />
              <input
                className="cu-input"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>

            <div className="cu-form-row">
              <input
                className="cu-input"
                type="email"
                name="email"
                placeholder="E-Mail"
                value={form.email}
                onChange={handleChange}
              />
              <input
                className="cu-input"
                type="tel"
                name="telephone"
                placeholder="Telephone"
                value={form.telephone}
                onChange={handleChange}
              />
            </div>

            <textarea
              className="cu-textarea"
              name="message"
              placeholder="How can we help you? *"
              value={form.message}
              onChange={handleChange}
            />

            <button className="cu-submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
