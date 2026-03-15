import heroBannerController from './hero-banner-controller';
import './index.css';

const HeroBanner = () => {
  const { pageData, loading } = heroBannerController();
  if (loading || !pageData) return null;

  return (
    <>
      {pageData && (
        <section className="hero">
          {pageData?.heroImage && (
            <div
              className="hero-background"
              style={{
                background: `url(${pageData?.heroImage}) center/cover no-repeat`,
              }}
            />
          )}
          <div className="hero-content">
            {pageData?.title && (
              <h1 className="hero-title">
                {pageData?.title?.split(' ').map((word:any, index:number) =>
                  word === 'Streamline' || word === 'Confidence' ? (
                    <span key={index} className="hero-highlight">
                      {word + ' '}
                    </span>
                  ) : (
                    word + ' '
                  )
                )}
              </h1>
            )}
            {pageData?.description && (
              <p className="hero-description">{pageData?.description}</p>
            )}
            {(pageData?.primaryButton || pageData?.secondaryButton) && (
              <div className="hero-actions">
                {pageData?.primaryButton && (
                  <a href={pageData?.primaryButton?.link}>
                    <button className="hero-btn-primary">
                      {pageData?.primaryButton?.text}
                    </button>
                  </a>
                )}
                {pageData?.secondaryButton && (
                  <a href={pageData?.secondaryButton?.link}>
                    <button className="hero-btn-secondary">
                      {pageData?.secondaryButton?.text}
                    </button>
                  </a>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default HeroBanner;
