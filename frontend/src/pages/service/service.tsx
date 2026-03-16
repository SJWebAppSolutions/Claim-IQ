import serviceController from './service-controller';

interface ServicePoint {
  label: string;
}

interface Service {
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
  points: ServicePoint[];
}

const ServicePage = () => {
  const { pageData, loading } = serviceController();

  if (loading || !pageData) return null;

  return (
     <div className="sp-wrap">
        <section className="sp-hero">
          {pageData?.heroBanner?.backgroundImage && (
            <div
              className="sp-hero-bg"
              style={{
                background: `url(${pageData?.heroBanner?.backgroundImage}) center / cover no-repeat`,
              }}
            />
          )}
          {(pageData?.heroBanner?.title || pageData?.heroBanner?.subtitle) && (
            <div className="sp-hero-content">
              {pageData?.heroBanner?.title && (
                <h1 className="sp-hero-title">{pageData?.heroBanner?.title}</h1>
              )}
              {pageData?.heroBanner?.subtitle && (
                <p className="sp-hero-sub">{pageData?.heroBanner?.subtitle}</p>
              )}
            </div>
          )}
        </section>

        <div className="sp-service-outer">
          {pageData?.services?.map((svc: Service, idx: number) => (
            <>
              {(svc?.title ||
                svc?.description ||
                svc?.image ||
                !!svc?.points?.length) && (
                <section
                  className={`sp-service ${svc?.imagePosition === 'right' ? 'reverse' : ''}`}
                  key={idx}>
                  {(svc?.title ||
                    svc?.description ||
                    !!svc?.points?.length) && (
                    <div className="sp-text-col">
                      {svc?.title?.includes('(') ? (
                        <div className="sp-text-col">
                          {svc?.title?.split('(')[0]?.trim()}
                          <span className="sp-badge">
                            ({svc?.title.split('(')[1]}
                          </span>
                        </div>
                      ) : (
                        <>
                          {svc?.title && (
                            <div className="rcm-services-item-title">
                              {svc?.title}
                            </div>
                          )}
                        </>
                      )}
                      {svc?.description && (
                        <p className="sp-desc">{svc?.description}</p>
                      )}
                      {!!svc?.points?.length && (
                        <ul className="sp-list">
                          {svc?.points?.map((b: ServicePoint, i: number) => (
                            <li key={i}>{b?.label}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {svc?.image && (
                    <div className="sp-img-col">
                      <img src={svc?.image} alt={svc?.title} loading="lazy" />
                    </div>
                  )}
                </section>
              )}
            </>
          ))}
        </div>
      {Object.keys(pageData?.contant || {}).length > 0 && (
        <div className="service-contact-icon">
          <img src={pageData?.contant?.name} alt="phone" />
          <a href={`mailto:${pageData?.contant?.value}`}>
            {pageData?.contant?.value}
          </a>
        </div>
      )}
      </div>
  );
};

export default ServicePage;
