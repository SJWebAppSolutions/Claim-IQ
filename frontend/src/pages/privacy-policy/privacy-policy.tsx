import privacyPolicyController from './privacy-policy-controller';

const PrivacyPolicy = () => {
  const { pageData, loading } = privacyPolicyController();

  if (loading || !pageData) return null;

  return (
    <>
      <section className="referral-hero">
        <div
          className="referral-hero-bg"
          style={{ background: `url(${pageData?.image}) center/cover no-repeat` }}
        />
        <div className="referral-hero-content">
          <h1 className="referral-hero-title">{pageData?.header}</h1>
          <p className="referral-hero-sub">
            {pageData?.description}
          </p>
        </div>
      </section>

      <div className="privacy-policy-wrapper">
        <div className="privacy-policy-inner">
          <div className="privacy-policy-meta">
            <span className="privacy-policy-effective">
              Effective Date: {pageData?.effectiveDate}
            </span>
            <span className="privacy-policy-divider" aria-hidden="true" />
            <span className="privacy-policy-count">
              {pageData?.sections?.length} sections
            </span>
          </div>

          <hr className="privacy-policy-top-rule" />

          <div className="privacy-policy-sections">
            {pageData?.sections?.map((data: any) => (
              <div key={data?.id} className="privacy-policy-section">
                <div className="privacy-policy-num-col">
                  <span className="privacy-policy-num">
                    {String(data?.id).padStart(2, '0')}
                  </span>
                </div>

                <div className="privacy-policy-content-col">
                  <h2 className="privacy-policy-section-title">
                    {data?.title}
                  </h2>
                  {data?.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default PrivacyPolicy;
