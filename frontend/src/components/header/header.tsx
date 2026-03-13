import { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const NAV_LINKS = [
    { label: 'Home', link: '/' },
    { label: 'About us', link: '/about-us' },
    { label: 'Services', link: '/services' },
    { label: 'Contact us', link: '/contact-us' },
    { label: 'Refer a Practice', link: '/refer-practice' },
  ];

  return (
    <>
      <div className="tb">
        <div className="tb-phone">
          <img
            src="https://res.cloudinary.com/dzvom7900/image/upload/v1773256157/call_icon_mtpbl7.svg"
            alt="phone"
          />
          <span>943-294-7296</span>
        </div>
        <div className="tb-icons">
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

      <nav className="nav">
        <Link to="/">
          <div className="nav-logo">
            <img
              src="https://res.cloudinary.com/dzvom7900/image/upload/v1773419695/logo_icon_iulurx.png"
              alt="Claim IQ"
            />
          </div>
        </Link>

        <div className="nav-links">
          {NAV_LINKS.map(({ label, link }, i) => (
            <a
              key={label}
              href={link}
              className={`nl${i === 0 ? ' active' : ''}`}>
              {label}
            </a>
          ))}
        </div>

        <div className="nav-r">
          {/* Search icon */}
          <button className="search-btn" aria-label="Search">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1a3a6b"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
          <button className="btn-gs">Get Started</button>
          <button
            className="hbg"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div className={`mmenu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, link }, i) => (
          <a
            key={label}
            href={link}
            className={`nl${i === 0 ? ' active' : ''}`}>
            {label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;
