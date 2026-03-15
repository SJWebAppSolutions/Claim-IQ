import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import contantUsController from './contact-us-controller';

const ContactPage = () => {
  const { breadcrumb, pageData, handleSubmit, handleChange, formData,formLoading } =
    contantUsController();

  return (
    <>
      {pageData?.heroBanner && Object.keys(pageData.heroBanner).length > 0 && (
        <section className="contact-hero">
          {pageData.heroBanner.backgroundImage && (
            <div
              className="contact-hero-bg"
              style={{
                background: `url(${pageData.heroBanner.backgroundImage}) center/cover no-repeat`,
              }}
            />
          )}

          {(pageData.heroBanner.title || pageData.heroBanner.subtitle) && (
            <div className="contact-hero-content">
              {pageData.heroBanner.title && (
                <h1 className="contact-hero-title">
                  {pageData.heroBanner.title}
                </h1>
              )}

              {pageData.heroBanner.subtitle && (
                <p className="contact-hero-sub">
                  {pageData.heroBanner.subtitle}
                </p>
              )}
            </div>
          )}
        </section>
      )}

      <div className="contact-body">
        {pageData?.story && Object.keys(pageData.story).length > 0 && (
          <div className="contact-left">
            {pageData.story.heading && (
              <h2 className="contact-welcome-title">
                {pageData.story.heading}
              </h2>
            )}

            {pageData.story.description && (
              <p className="contact-welcome-text">
                {pageData.story.description}
              </p>
            )}
          
            <div className="contact-info-row">
              {pageData?.contactItems?.map((item: any, index: number) => (
                <div className="contact-info-item" key={index}>
                  {item?.icon && (
                    <div className="contact-info-icon">
                      <img src={item.icon} alt={item.title} />
                    </div>
                  )}

                  {(item?.title || item?.description) && (
                    <div>
                      {item?.title && (
                        <div className="contact-info-label">{item.title}</div>
                      )}

                      {item?.description && (
                        <div className="contact-info-value">
                          {item.description}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="contact-form-card">
          <p className="contact-form-eyebrow">Have Questions?</p>
          <h3 className="contact-form-title">Send us a Message!</h3>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <input
                className="contact-input"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData?.firstName}
                onChange={handleChange}
                required
              />
              <input
                className="contact-input"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData?.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-row">
              <input
                className="contact-input"
                type="email"
                name="email"
                placeholder="E-Mail"
                value={formData?.email}
                onChange={handleChange}
                required
              />
              <input
                className="contact-input"
                type="tel"
                name="telephone"
                placeholder="Telephone"
                value={formData?.telephone}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              className="contact-textarea"
              name="message"
              placeholder="How can we help you? *"
              value={formData?.message}
              onChange={handleChange}
              required
            />

            <button className="contact-submit" type="submit">
              {formLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
