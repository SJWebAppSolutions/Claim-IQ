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
            <h3>Important Links</h3>
            {footer?.navigation?.map((l: any) => (
              <a key={l?.path} href={l?.path} className="footer-link">
                {l?.label}
              </a>
            ))}
          </div>
        )}

        {!!footer?.contact?.length && (
          <div className="footer-column">
            <h3>Contact Us</h3>

            {footer?.contact?.map((item: any, index: number) => (
              <p key={index} className="footer-contact">
                {item?.name}: {item?.value}
              </p>
            ))}
          </div>
        )}
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">© {new Date().getFullYear()}</span>

        <a href="/privacy-policy" className="footer-privacy-link">
           Privacy Policy
       </a>

        {!!footer?.social?.length && (
          <div className="footer-social">
            {footer?.social?.slice(1)?.map((item: any) => (
              <a
                className='social-icon'
                key={item?.icon}
                href={item?.iconUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${item?.icon} profile`}
                >
                <i className={item?.url}></i>
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
