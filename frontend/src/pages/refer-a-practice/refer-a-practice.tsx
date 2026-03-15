// import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import referAPracticeController from './refer-a-practice-controller';

type Point = {
  title: string;
};

type referralData = {
  title?: string;
  description?: string;
  points?: Point[];
};

const ReferAPractice = () => {
  const {
    breadcrumb,
    pageData,
    handleSubmit,
    handleChange,
    formData,
    formLoading,
  } = referAPracticeController();

  return (
    <>
      <section className="referral-hero">
        {pageData?.heroBanner?.backgroundImage && (
          <div
            className="referral-hero-bg"
            style={{
              background: `url(${pageData?.heroBanner?.backgroundImage}) center/cover no-repeat`,
            }}
          />
        )}
        {(pageData?.heroBanner?.title || pageData?.heroBanner?.subtitle) && (
          <div className="referral-hero-content">
            {pageData?.heroBanner?.title && (
              <h1 className="referral-hero-title">
                {pageData?.heroBanner?.title}
              </h1>
            )}
            {pageData?.heroBanner?.subtitle && (
              <p className="referral-hero-sub">
                {pageData?.heroBanner?.subtitle}
              </p>
            )}
          </div>
        )}
      </section>

      <div className="referral-body">
        <div className="referral-form-card">
          <form className="referral-form" onSubmit={handleSubmit}>
            <p className="referral-section-label">1. Your Information</p>

            <div className="referral-row">
              <input
                className="referral-input"
                type="text"
                name="yourName"
                placeholder="Your Name *"
                value={formData?.yourName}
                onChange={handleChange}
                required
              />
              <input
                className="referral-input"
                type="email"
                name="yourEmail"
                placeholder="Your Email *"
                value={formData?.yourEmail}
                onChange={handleChange}
                required
              />
            </div>

            <input
              className="referral-input"
              type="tel"
              name="yourPhone"
              placeholder="Your Phone"
              value={formData?.yourPhone}
              onChange={handleChange}
            />

            <p className="referral-section-label referral-section-gap">
              2. Referred Practice Information
            </p>

            <div className="referral-row">
              <input
                className="referral-input"
                type="text"
                name="practiceName"
                placeholder="Practice Name *"
                value={formData?.practiceName}
                onChange={handleChange}
                required
              />
              <input
                className="referral-input"
                type="text"
                name="contactPersonName"
                placeholder="Contact Person Name *"
                value={formData?.contactPersonName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="referral-row">
              <input
                className="referral-input"
                type="email"
                name="theirEmail"
                placeholder="Their Email *"
                value={formData?.theirEmail}
                onChange={handleChange}
                required
              />
              <input
                className="referral-input"
                type="tel"
                name="theirPhone"
                placeholder="Their Phone"
                value={formData?.theirPhone}
                onChange={handleChange}
              />
            </div>

            <textarea
              className="referral-textarea"
              name="notes"
              placeholder="Additional Notes (Optional)"
              value={formData?.notes}
              onChange={handleChange}
            />

            <button className="referral-submit" type="submit">
              {formLoading ? 'Submitting...' : 'Submit Referral'}{' '}
            </button>
          </form>
        </div>

        {!!pageData?.sections?.length && (
          <div className="referral-info">
            {pageData?.sections?.map((item: referralData, index: number) => (
              <div key={index}>
                {item?.title && (
                  <h2 className="referral-info-title">{item?.title}</h2>
                )}
                {item?.description && (
                  <p className="referral-info-intro">{item?.description}</p>
                )}
                {!!item?.points?.length && (
                  <ul className="referral-list">
                    {item?.points?.map((data: Point, index: number) => (
                      <li key={index}>{data?.title}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default ReferAPractice;
