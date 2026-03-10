import { useState } from "react";
import heroBannerImage from '../assets/cms-demo-page/hero_banner.png'
const NAV_LINKS = ["Home", "About us", "Services", "Contact us", "Refer a Practice"];
import claimIcon from '../assets/company_logo.png'
const SERVICES = [
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" stroke="#1e56a0" strokeWidth="1.5" fill="#eef4ff"/>
        <path d="M15 26c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#1e56a0" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M22 19v-5" stroke="#f5a623" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="22" cy="12" r="2" fill="#f5a623"/>
        <rect x="18" y="26" width="8" height="5" rx="1" stroke="#1e56a0" strokeWidth="1.4"/>
      </svg>
    ),
    title: "Dental Insurance Billing",
    badge: null,
    desc: "Comprehensive management of your entire billing cycle, ensuring accurate coding and timely submissions.",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" stroke="#1e56a0" strokeWidth="1.5" fill="#eef4ff"/>
        <rect x="12" y="10" width="20" height="24" rx="2" stroke="#1e56a0" strokeWidth="1.5"/>
        <path d="M16 16h12M16 20h12M16 24h8" stroke="#1e56a0" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="31" cy="31" r="5.5" fill="#fff" stroke="#f5a623" strokeWidth="1.5"/>
        <path d="M29 31h4M31 29v4" stroke="#f5a623" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Insurance Verification",
    badge: "Try free for 2 weeks — no charge",
    desc: "Thorough verification of patient benefits before their appointment to eliminate surprises and denials.",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" stroke="#1e56a0" strokeWidth="1.5" fill="#eef4ff"/>
        <rect x="10" y="13" width="24" height="18" rx="2" stroke="#1e56a0" strokeWidth="1.5"/>
        <path d="M10 19h24" stroke="#1e56a0" strokeWidth="1.4"/>
        <path d="M15 24h5M15 27h10" stroke="#1e56a0" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="29" cy="26" r="4" fill="#fff" stroke="#f5a623" strokeWidth="1.5"/>
        <path d="M27.5 26l1.2 1.2 2.3-2.4" stroke="#f5a623" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Claims Posting",
    badge: null,
    desc: "Accurate and rapid posting of insurance payments and adjustments to keep your ledger perfectly balanced.",
  },
  {
    icon: (
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
        <circle cx="22" cy="22" r="21" stroke="#1e56a0" strokeWidth="1.5" fill="#eef4ff"/>
        <circle cx="22" cy="22" r="9" stroke="#1e56a0" strokeWidth="1.5"/>
        <path d="M22 16v2M22 26v2M16 22h2M26 22h2" stroke="#1e56a0" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="22" cy="22" r="4" stroke="#f5a623" strokeWidth="1.5"/>
        <path d="M34 12l2-2M10 12L8 10M34 32l2 2M10 32l-2 2" stroke="#1e56a0" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Merchant Processing",
    badge: null,
    desc: "Secure, integrated payment solutions with competitive rates to streamline patient collections.",
  },
];

const HOW_IT_WORKS = [
  { num: "01", title: "Schedule Consultation", desc: "We discuss your practice's specific needs, current challenges, and goals to build a tailored plan.", active: true },
  { num: "02", title: "Onboarding & Setup", desc: "Seamless integration with your existing dental software and secure credentialing.", active: false },
  { num: "03", title: "We Handle Billing", desc: "Our experts take over verification, claim submission, and follow-ups.", active: false },
  { num: "04", title: "You Get Paid Faster", desc: "Enjoy improved cash flow, fewer denials, and transparent reporting.", active: false },
];

const FOOTER_LINKS = ["Home", "About Us", "Services", "Contact Us", "Refer a Practice"];

 const  CmsDemoPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif", color: "#1a1a2e", margin: 0, padding: 0, background: "#fff" }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; }

        .topbar {
          background: #1e3c72;
          color: #fff; font-size: 13px;
          padding: 8px 48px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .topbar-phone { display: flex; align-items: center; gap: 8px; letter-spacing: 0.2px; }
        .topbar-socials { display: flex; gap: 8px; }
        .topbar-socials a {
          width: 28px; height: 28px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.3);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.8); transition: all .2s;
        }
        .topbar-socials a:hover { border-color: #fff; color: #fff; background: rgba(255,255,255,0.1); }

        .navbar {
          background: #fff;
          display: flex; align-items: center; justify-content: space-between;
          padding: 0px 48px;
          border-bottom: 1.5px solid #e4ecf7;
          position: sticky; top: 0; z-index: 200;
          box-shadow: 0 2px 16px rgba(30,60,114,0.06);
        }
        .logo-box {
          border: 2px dashed #1e56a0; border-radius: 10px;
          padding: 7px 14px;
          display: flex; align-items: center; gap: 10px;
        }
        .logo-text { font-size: 22px; font-weight: 800; color: #1e3c72; letter-spacing: -0.5px; line-height: 1; }
        .logo-text span { color: #f5a623; }
        .logo-sub { font-size: 8.5px; color: #8898b0; letter-spacing: 0.8px; text-transform: uppercase; margin-top: 2px; }

        .nav-links { display: flex; gap: 32px; list-style: none; }
        .nav-links li a { font-size: 14px; color: #3d4f6b; font-weight: 500; transition: color .2s; }
        .nav-links li a:hover { color: #1e56a0; }
        .nav-links li a.active { color: #1e56a0; font-weight: 700; }
        .nav-right { display: flex; align-items: center; gap: 18px; }
        .search-icon { color: #3d4f6b; cursor: pointer; transition: color .2s; }
        .search-icon:hover { color: #1e56a0; }

        .btn-primary {
          border-radius: 7px !important;
          background: linear-gradient(135deg, #1e56a0 0%, #2563c7 100%);
          color: #fff; border: none;
          padding: 11px 26px; font-size: 14px; font-weight: 700;
          cursor: pointer; transition: all .25s; white-space: nowrap;
          box-shadow: 0 4px 14px rgba(30,86,160,0.3);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(30,86,160,0.4); }

        .btn-outline-white {
          border-radius: 7px;
          background: transparent; color: #fff;
          border: 2px solid rgba(255,255,255,0.7);
          padding: 11px 26px; font-size: 14px; font-weight: 700;
          cursor: pointer; transition: all .25s; white-space: nowrap;
        }
        .btn-outline-white:hover { background: rgba(255,255,255,0.14); border-color: #fff; }

        .btn-cta {
          border-radius: 7px !important;
          background: linear-gradient(135deg, #1e3c72 0%, #1e56a0 100%);
          color: #fff; border: none; border-radius: 30px;
          padding: 14px 36px; font-size: 15px; font-weight: 700;
          cursor: pointer; transition: all .25s;
          box-shadow: 0 4px 18px rgba(30,60,114,0.28);
        }
        .btn-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(30,60,114,0.38); }

        .hamburger {
          display: none; flex-direction: column; gap: 5px;
          cursor: pointer; background: none; border: none; padding: 4px;
        }
        .hamburger span { width: 24px; height: 2.5px; background: #1e3c72; border-radius: 2px; display: block; }

        /* HERO */
        .hero {
          position: relative; overflow: hidden; min-height: 360px;
          background: linear-gradient(110deg, #0f2554 0%, #1e3c72 38%, #1e56a0 72%, #2a6dd9 100%);
          display: flex; align-items: center; justify-content: center;
          padding: 80px 48px; text-align: center;
        }
        .hero-overlay {
          position: absolute; inset: 0;
          background: url(${heroBannerImage}) center/cover no-repeat;
          opacity: 0.11; mix-blend-mode: luminosity;
        }
        .hero-radial {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse at 60% 50%, rgba(42,109,217,0.35) 0%, transparent 65%);
        }
        .hero-content { position: relative; z-index: 2; max-width: 740px; }
        .hero-content h1 {
          font-size: clamp(28px, 4.5vw, 50px); font-weight: 800;
          line-height: 1.16; color: #fff; margin-bottom: 22px; letter-spacing: -0.6px;
        }
        .hero-content h1 .gold { color: #f5a623; }
        .hero-content p {
          font-size: 16px; color: rgba(255,255,255,0.84);
          line-height: 1.78; margin-bottom: 38px;
          max-width: 570px; margin-left: auto; margin-right: auto;
        }
        .hero-btns { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; }

        /* SERVICES */
        .services-section { padding: 40px 48px; background: #fff; }
        .section-eyebrow {
          text-align: center; font-size: 11.5px; font-weight: 800;
          color: #1e56a0; letter-spacing: 2.5px; text-transform: uppercase; margin-bottom: 10px;
        }
        .section-title {
          text-align: center; font-size: clamp(22px, 3vw, 30px);
          color: #115194; margin-bottom: 14px; letter-spacing: -0.4px;
        }
        .section-sub {
          text-align: center; color: #5a6e8a; font-size: 15.5px;
          max-width: 640px; margin: 0 auto 56px; line-height: 1.78;
        }

        .services-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          overflow: hidden;max-width: 1040px; margin: 0 auto;
        }
        .service-card {
          padding: 36px 30px; display: flex; gap: 20px; align-items: flex-start;
          background: #fff; transition: background .2s;
        }
        .service-card:nth-child(2n) { border-right: none; }
        .service-card:nth-child(3), .service-card:nth-child(4) { border-bottom: none; }
        .service-card:hover { background: #f6faff; }
        .service-icon-wrap { flex-shrink: 0; margin-top: 2px; }
        .service-title-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 8px; }
        .service-title { font-size: 16px; font-weight: 700; color: #1e3c72; }
        .badge {
          font-size: 10px; color: #1e56a0; border: 1.5px solid #a8c4e8;
          border-radius: 20px; padding: 2px 9px; font-weight: 700;
          background: #eef4ff; white-space: nowrap;
        }
        .service-desc { font-size: 13.5px; color: #5a6e8a; line-height: 1.7; margin-bottom: 14px; }
        .read-more {
          font-size: 13px; color: #1e56a0; font-weight: 700;
          display: inline-flex; align-items: center; gap: 5px; cursor: pointer; transition: gap .15s;
        }
        .read-more:hover { gap: 9px; }

        /* HOW IT WORKS */
        .how-section { padding: 40px 20px; background: #f3f7fd; }
        .steps-wrapper {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 28px; max-width: 1040px; margin: 0 auto;
        }
        .step-card { padding: 4px 0; }
        .step-num-circle {
          width: 54px; height: 54px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 17px; font-weight: 800; margin-bottom: 20px;
        }
        .step-active {
          background: linear-gradient(135deg, #1e3c72, #1e56a0);
          color: #fff; box-shadow: 0 4px 16px rgba(30,60,114,0.22);
        }
        .step-inactive {
          background: transparent; color: #8898b0;
          border: 2px solid #c8d8ee;
        }
        .step-title { font-size: 15px; font-weight: 700; color: #1e3c72; margin-bottom: 10px; }
        .step-desc { font-size: 13.5px; color: #5a6e8a; line-height: 1.72; }

        /* CTA */
        .cta-section { padding: 20px 48px 80px }
        .cta-card {
          background: linear-gradient(135deg, #d8eaf8 0%, #e4eef9 50%, #d0e6f6 100%);
          border-radius: 20px; padding: 60px 40px; text-align: center;
          max-width: 1040px; margin: 0 auto;
          border: 1.5px solid #bcd4ed;
          box-shadow: 0 6px 36px rgba(30,86,160,0.08);
        }
        .cta-card h2 {
          font-size: clamp(22px, 3vw, 30px);
          color: #115194; margin-bottom: 14px; letter-spacing: -0.3px;
        }
        .cta-card p {
          color: #4a5f7a; font-size: 15.5px; line-height: 1.75;
          max-width: 560px; margin: 0 auto 34px;
        }

        /* FOOTER */
        .footer { background: #122150; padding: 56px 48px 24px; }
        .footer-grid {
          display: grid; grid-template-columns: 2fr 1fr 1.4fr;
          gap: 48px; max-width: 1040px; margin: 0 auto 40px;
        }
        .footer-logo-row { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .footer-logo-text { font-size: 22px; font-weight: 800; color: #fff; }
        .footer-logo-text span { color: #f5a623; }
        .footer-logo-sub { font-size: 9px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.8px; margin-top: 2px; }
        .footer-desc { font-size: 13.5px; color: rgba(255,255,255,0.58); line-height: 1.82; max-width: 340px; }
        .footer-col h4 { font-size: 12px; font-weight: 700; color: #fff; margin-bottom: 18px; letter-spacing: 1px; text-transform: uppercase; }
        .footer-col ul { list-style: none; }
        .footer-col ul li { margin-bottom: 12px; }
        .footer-col ul li a { font-size: 13.5px; color: rgba(255,255,255,0.58); transition: color .2s; }
        .footer-col ul li a:hover { color: #f5a623; }
        .footer-contact-item { font-size: 13.5px; color: rgba(255,255,255,0.58); margin-bottom: 10px; line-height: 1.6; }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1); padding-top: 22px;
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;
          max-width: 1040px; margin: 0 auto;
        }
        .footer-bottom p { font-size: 12.5px; color: rgba(255,255,255,0.38); }
        .footer-socials { display: flex; gap: 10px; }
        .footer-socials a {
          width: 32px; height: 32px; border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.18);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.58); transition: all .2s;
        }
        .footer-socials a:hover { border-color: #f5a623; color: #f5a623; background: rgba(245,166,35,0.08); }

        /* MOBILE NAV */
        .mobile-nav {
          display: none; flex-direction: column;
          background: #fff; border-top: 1.5px solid #e4ecf7;
          padding: 20px 24px; gap: 16px;
          box-shadow: 0 8px 24px rgba(30,60,114,0.1);
        }
        .mobile-nav a { font-size: 15px; color: #3d4f6b; font-weight: 500; padding: 4px 0; }
        .mobile-nav .btn-primary { text-align: center; margin-top: 4px; }

        @media (max-width: 960px) {
          .nav-links, .nav-right { display: none; }
          .hamburger { display: flex; }
          .mobile-nav { display: flex; }
          .topbar, .navbar { padding-left: 20px; padding-right: 20px; }
          .hero { padding: 56px 20px; }
          .services-section, .how-section { padding: 56px 20px; }
          .cta-section { padding: 0 20px 56px; }
          .footer { padding: 48px 20px 20px; }
          .services-grid { grid-template-columns: 1fr; }
          .service-card { border-right: none !important; }
          .service-card:nth-child(3) { border-bottom: 1.5px solid #dde8f7 !important; }
          .steps-wrapper { grid-template-columns: 1fr 1fr; gap: 28px; }
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 580px) {
          .hero-btns { flex-direction: column; align-items: stretch; }
          .btn-primary, .btn-outline-white { width: 100%; text-align: center; }
          .steps-wrapper { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr; }
          .cta-card { padding: 40px 20px; }
        }
        .claim-icon{
          width: 140px;
          height: 90px;
        }  
      `}</style>

      {/* TOP BAR */}
      <div className="topbar">
        <div className="topbar-phone">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
            <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1 1 0 011.1-.2 11.5 11.5 0 003.6 1.2 1 1 0 011 1V21a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.5a1 1 0 011 1c.1 1.3.4 2.5.9 3.6a1 1 0 01-.2 1.1L6.6 10.8z" fill="#fff"/>
          </svg>
          943-294-7296
        </div>
        <div className="topbar-socials">
          <a href="#" aria-label="LinkedIn"><svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
          <a href="#" aria-label="Facebook"><svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">

          <img src={claimIcon} alt='claimIcon' className="claim-icon"/>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link}><a href="#" className={link === "Home" ? "active" : ""}>{link}</a></li>
          ))}
        </ul>

        <div className="nav-right">
          <svg className="search-icon" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          <button className="btn-primary">Get Started</button>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-nav">
          {NAV_LINKS.map((link) => <a href="#" key={link}>{link}</a>)}
          <button className="btn-primary">Get Started</button>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay"/>
        <div className="hero-radial"/>
        <div className="hero-content">
          <h1>
            <span className="gold">Streamline</span> Your Revenue<br/>
            With Total <span className="gold">Confidence</span>
          </h1>
          <p>Expert insurance billing, verification, and claims management designed for high-performing dental practices.</p>
          <div className="hero-btns">
            <button className="btn-primary">Schedule Your Free Consultation</button>
            <button className="btn-outline-white">Explore Services</button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <h2 className="section-title">Comprehensive Revenue Cycle Management</h2>
        <p className="section-sub">We handle the complexities of dental billing with precision and scale, so your team can dedicate their time to providing exceptional patient care.</p>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon-wrap">{s.icon}</div>
              <div>
                <div className="service-title-row">
                  <span className="service-title">{s.title}</span>
                  {s.badge && <span className="badge">{s.badge}</span>}
                </div>
                <p className="service-desc">{s.desc}</p>
                <div className="read-more">Read More <span style={{fontSize:"16px",lineHeight:1}}>›</span></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <h2 className="section-title">How It Works</h2>
        <p className="section-sub">A professionally structured onboarding process that ensures minimal disruption to your practice operations.</p>
        <div className="steps-wrapper">
          {HOW_IT_WORKS.map((step) => (
            <div className="step-card" key={step.num}>
              <div className={`step-num-circle ${step.active ? "step-active" : "step-inactive"}`}>{step.num}</div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-card">
          <h2>Ready to simplify your dental billing?</h2>
          <p>Join dental practices that trust Claim IQ to maximize their revenue and reduce administrative headaches.</p>
          <button className="btn-cta">Schedule Your Free Consultation</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <img src={claimIcon} alt='claimIcon' className="claim-icon"/>
            <p className="footer-desc">Claim IQ simplifies dental billing with efficient claim management, insurance processing, and revenue cycle support to help your practice grow.</p>
          </div>

          <div className="footer-col">
            <h4>Important Links</h4>
            <ul>{FOOTER_LINKS.map((link) => <li key={link}><a href="#">{link}</a></li>)}</ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <p className="footer-contact-item">Call: 943-294-7296</p>
            <p className="footer-contact-item">Email: info@claimiqconsulting.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Claim IQ. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn"><svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="currentColor"/></svg></a>
            <a href="#" aria-label="Facebook"><svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default CmsDemoPage
