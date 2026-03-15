import aboutUsController from './about-us-controller';

const AboutPage = () => {
  const { pageData, loading } = aboutUsController();

  if (loading || !pageData) return null;

  return (
    <div className="about-wrapper">
      {pageData?.heroBanner && (
        <section
          className="hero-section"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url(${pageData?.heroBanner?.backgroundImage}) center/cover no-repeat`,
          }}>
          {(pageData?.heroBanner?.title || pageData?.heroBanner?.subtitle) && (
            <div className="hero-content">
              {pageData?.heroBanner?.title && (
                <h1 className="about-hero-title">
                  {pageData?.heroBanner?.title}
                </h1>
              )}
              {pageData?.heroBanner?.subtitle && (
                <p className="hero-subtitle">
                  {pageData?.heroBanner?.subtitle}
                </p>
              )}
            </div>
          )}
        </section>
      )}

      {pageData?.story && (
        <section className="story-section">
          {(pageData?.story?.heading || pageData?.story?.description) && (
            <div className="story-text">
              {pageData?.story?.heading && <h2>{pageData?.story?.heading}</h2>}
              {pageData?.story?.description && (
                <p>{pageData?.story?.description}</p>
              )}
            </div>
          )}
          {pageData?.story?.image && (
            <div className="story-image">
              {pageData?.story?.image && (
                <img
                  src={pageData?.story?.image}
                  alt={pageData?.story?.heading}
                />
              )}
            </div>
          )}
        </section>
      )}

      {pageData?.infoCards && (
        <section className="mv-section">
          {pageData?.infoCards?.map((item: any, index: number) => (
            <div className="mv-card" key={index?.toString()}>
              {item?.icon && (
                <div className="mv-icon">
                  <img src={item?.icon} alt={item?.title} />
                </div>
              )}
              {(item?.title || item?.description) && (
                <div className="mv-text">
                  {item?.title && <h3>{item?.title}</h3>}
                  {item?.description && <p>{item?.description}</p>}
                </div>
              )}
            </div>
          ))}
        </section>
      )}
    </div>
  );
};

export default AboutPage;
