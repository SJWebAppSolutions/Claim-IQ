import './index.css';

const Footer = ({ pageData }: any) => {
  const { footer } = pageData;

  return (
    <footer className="footer">
      <div className="footer-grid">
        {(footer?.brand?.logo || footer?.brand?.title) && (
          <div>
            {footer?.brand?.logo && (
              <div className="footer-logo">
                <img src={footer?.brand?.logo} alt="Claim IQ" />
              </div>
            )}
            {footer?.brand?.title && (
              <p className="footer-description">{footer?.brand?.title}</p>
            )}
          </div>
        )}

        {!!footer?.navigation?.length && (
          <div className="footer-column">
            <h4>Important Links</h4>
            {footer?.navigation?.map((l: any) => (
              <a key={l?.path} href={l?.path} className="footer-link">
                {l?.label}
              </a>
            ))}
          </div>
        )}

        {!!footer?.contact?.length && (
          <div className="footer-column">
            <h4>Contact Us</h4>

            {footer?.contact?.map((item: any, index: number) => (
              <p key={index} className="footer-contact">
                {item?.name}: {item?.value}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">© 2026</span>
        {!!footer?.social?.length && (
          <div className="footer-social">
            {footer?.social?.slice(1)?.map((item: any) => (
              <a
                key={item?.icon}
                href={item?.iconUrl}
                target="_blank"
                rel="noopener noreferrer">
                <button className="footer-social-icon" aria-label={item?.icon}>
                  <img src={item?.url} alt={item?.icon} />
                </button>
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
