import './index.css';

const TwoColumnGrid = () => {
  const SERVICES = [
  {
    icon: "https://res.cloudinary.com/dzvom7900/image/upload/v1773257038/dentail_insurance_pe8kq7.png",
    title: "Dental Insurance Billing",
    badge: null,
    desc: "Comprehensive management of your entire billing cycle, ensuring accurate coding and timely submissions.",
  },
  {
    icon: "https://res.cloudinary.com/dzvom7900/image/upload/v1773257038/insurance_verification_nhv8zt.png",
    title: "Insurance Verification",
    badge: "Try free for 2 weeks — no charge",
    desc: "Thorough verification of patient benefits before their appointment to eliminate surprises and denials.",
  },
  {
    icon: "https://res.cloudinary.com/dzvom7900/image/upload/v1773257038/claim_posting_o3d3pa.png",
    title: "Claims Posting",
    badge: null,
    desc: "Accurate and rapid posting of insurance payments and adjustments to keep your ledger perfectly balanced.",
  },
  {
    icon: "https://res.cloudinary.com/dzvom7900/image/upload/v1773257039/merchant__processing_tlkynx.png",
    title: "Merchant Processing",
    badge: null,
    desc: "Secure, integrated payment solutions with competitive rates to streamline patient collections.",
  },
];

    return (
          <section className="svc-sec">
        <h2 className="sec-title">Comprehensive Revenue Cycle Management</h2>
        <p className="sec-sub">
          We handle the complexities of dental billing with precision and scale, so your team can dedicate their time to providing exceptional patient care.
        </p>
        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="svc-item">
              <div className="svc-icon">
                <img src={s.icon} alt={s.title} />
              </div>
              <div>
                <div className="svc-title">
                  {s.title}
                  {s.badge && <span className="badge">{s.badge}</span>}
                </div>
                <p className="svc-desc">{s.desc}</p>
                <button className="rm">
                  Read More
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default TwoColumnGrid;