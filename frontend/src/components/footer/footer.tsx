import './index.css';

const Footer = () => {
  return (
    <footer className="ftr">
      <div className="ftr-grid">
        <div>
          <div className="ftr-logo">
            <img
              src="https://res.cloudinary.com/dzvom7900/image/upload/v1773419695/logo_icon_iulurx.png"
              alt="Claim IQ"
            />
          </div>
          <p className="ftr-desc">
            Claim IQ simplifies dental billing with efficient claim management,
            insurance processing, and revenue cycle support to help your
            practice grow.
          </p>
        </div>

        <div className="ftr-col">
          <h4>Important Links</h4>
          {[
            'Home',
            'About Us',
            'Services',
            'Contact Us',
            'Refer a Practice',
          ].map((l) => (
            <a key={l} href="#" className="ftr-link">
              {l}
            </a>
          ))}
        </div>

        <div className="ftr-col">
          <h4>Contact Us</h4>
          <p className="ftr-info">Call: 943-294-7296</p>
          <p className="ftr-info">Email: Info@claimiqconsulting.com</p>
        </div>
      </div>

      <div className="ftr-bot">
        <span className="ftr-copy">© 2026</span>
        <div className="ftr-soc">
          {[
            {
              src: 'https://res.cloudinary.com/dzvom7900/image/upload/v1773256158/linkdin_sx3klm.png',
              alt: 'LinkedIn',
            },
            {
              src: 'https://res.cloudinary.com/dzvom7900/image/upload/v1773256158/facebook_i9yutg.png',
              alt: 'Facebook',
            },
            {
              src: 'https://res.cloudinary.com/dzvom7900/image/upload/v1773256158/instagram_ldwzrf.png',
              alt: 'Instagram',
            },
          ].map(({ src, alt }) => (
            <button key={alt} className="soc" aria-label={alt}>
              <img src={src} alt={alt} />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
