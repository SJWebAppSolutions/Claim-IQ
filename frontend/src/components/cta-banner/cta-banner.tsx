import ctaBannerController from './cta-banner-controller';
import './index.css';

const CtaBanner = () => {
  const { pageData, loading } = ctaBannerController();
  if (loading || !pageData) return null;

  return (
    <>
      {pageData &&
        (pageData?.title || pageData?.description || pageData?.button) && (
          <section className="cta-section">
            <div className="cta-card">
              {pageData?.title && (
                <h2 className="cta-title">{pageData?.title}</h2>
              )}
              {pageData?.description && (
                <p className="cta-description">{pageData?.description}</p>
              )}
              {pageData?.button && (
                <a href={pageData?.button?.link}>
                  <button className="cta-button">
                    {pageData?.button?.text}
                  </button>
                </a>
              )}
            </div>
          </section>
        )}
    </>
  );
};

export default CtaBanner;
