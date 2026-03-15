import './index.css';
import twoColumnGridController from './two-column-grid-controller';

const TwoColumnGrid = () => {
  const { pageData, loading } = twoColumnGridController();
  if (loading || !pageData) return null;

  return (
    <section className="rcm-services">
      {pageData?.title && (
        <h2 className="rcm-services_title">{pageData?.title}</h2>
      )}
      {pageData?.description && (
        <p className="rcm-services_subtitle">{pageData?.description}</p>
      )}
      <div className="rcm-services-grid">
        {pageData?.insuranceItems?.map((service: any, i: number) => (
          <div key={i} className="rcm-services_item">
            {service?.image && (
              <div className="rcm-services_icon">
                <img src={service?.image} alt={service?.title} />
              </div>
            )}

            <div className="rcm-services_content">
              {service?.title?.includes('(') ? (
                <div className='rcm-services-budge'>
                  {service?.title?.split('(')[0]?.trim()}
                  <span className="badge">({service?.title?.split('(')[1]}</span>
                </div>
              ) : (
                <div className='rcm-services-item-title'>{service?.title}</div>
              )}
              {service?.description && (
                <p className="rcm-services_description">
                  {service?.description}
                </p>
              )}

              <a href="/services">
                <button className="rcm-services_read-more">
                  Read More
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TwoColumnGrid;
