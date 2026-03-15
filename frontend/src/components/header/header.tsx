import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css';

const Header = ({ pageData }: any) => {
  const { header, footer } = pageData;

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="topbar">
        {(footer?.social?.[0]?.url || footer?.contact?.[0]?.value) && (
          <div className="topbar-phone">
            <img src={footer?.social?.[0]?.url} alt="phone" />
            <span>{footer?.contact?.[0]?.value}</span>
          </div>
        )}
        <div className="topbar-icons">
          {footer?.social?.slice(1)?.map((item: any) => (
            <button
              key={item.icon}
              className="topbar-social"
              aria-label={item.icon}>
              <img src={item?.url} alt={item?.icon} />
            </button>
          ))}
        </div>
      </div>

      <nav className="navbar">
        {header?.logo && (
          <Link to="/">
            <div className="navbar-logo">
              <img src={header?.logo} alt="Claim IQ" />
            </div>
          </Link>
        )}

        <div className="navbar-links">
          {header?.menu?.map((item: any) => (
            <NavLink
              key={item?.path}
              to={item?.path}
              className={({ isActive }) =>
                `navbar-link ${isActive ? 'active' : ''}`
              }>
              {item?.label}
            </NavLink>
          ))}
        </div>

        <div className="navbar-actions">
          <button className="btn-get-started">Get Started</button>
          <button
            className="hamburger-menu"
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

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {header?.menu?.map((item: any) => (
          <NavLink
            key={item?.path}
            to={item?.path}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `mobile-menu-link ${isActive ? 'active' : ''}`
            }>
            <span>{item?.label}</span>
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default Header;
