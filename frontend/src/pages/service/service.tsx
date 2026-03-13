const ServicePage = () => {
  const SERVICES = [
    {
      id: 'dental',
      reverse: false,
      title: 'Dental Insurance Billing',
      badge: null,
      img: 'https://res.cloudinary.com/dzvom7900/image/upload/v1773258044/dental_insurance_d0jg0t.png',
      imgAlt: 'Dental insurance billing',
      desc: 'Stop leaving money on the table. Our comprehensive dental insurance billing service takes the burden off your front office staff. We handle the entire lifecycle of a claim, from initial submission to final payment, ensuring that every procedure is coded correctly and submitted promptly.',
      bullets: [
        'Accurate CDT coding and claim generation',
        'Electronic and paper claim submissions',
        'Attachment management (x-rays, narratives)',
        'Aggressive follow-up on unpaid claims over 30 days',
        'Denial management and appeals processing',
      ],
    },
    {
      id: 'verification',
      reverse: true,
      title: 'Insurance Verification',
      badge: 'Try free for 2 weeks — no charge',
      img: 'https://res.cloudinary.com/dzvom7900/image/upload/v1773258044/insurance_verification_service_kscbrt.png',
      imgAlt: 'Insurance verification',
      desc: 'Knowledge is power, especially before the patient sits in the chair. Our dedicated human verification specialists ensure you know exactly what is covered, what the patient owes, and any limitations or waiting periods. This eliminates surprises for both your practice and your patients — no bots, no AI, just experienced professionals who know dental billing inside and out.',
      bullets: [
        'Comprehensive breakdown of benefits (Full & Standard)',
        'Verification completed 2–3 days prior to appointment',
        'History retrieval for frequencies and limitations',
        'Direct entry into your practice management software',
        'Real-time reports shared directly with your team',
      ],
    },
    {
      id: 'claims',
      reverse: false,
      title: 'Claims Posting',
      badge: null,
      img: 'https://res.cloudinary.com/dzvom7900/image/upload/v1773258044/claim_posting_service_lrc9kt.png',
      imgAlt: 'Claims posting',
      desc: 'Keep your ledger accurate and up-to-date. We rapidly and accurately post all insurance payments (EFTs and paper checks) and adjustments directly into your practice management software. This ensures your accounts receivable reports are always reflecting reality.',
      bullets: [
        'Daily posting of all insurance EOBs and ERAs',
        'Accurate application of write-offs and adjustments',
        'Immediate identification of underpayments',
        'Patient balance transfer and statement generation',
        'Daily reconciliation to ensure perfect balancing',
      ],
    },
    {
      id: 'merchant',
      reverse: true,
      title: 'Merchant Processing',
      badge: null,
      img: 'https://res.cloudinary.com/dzvom7900/image/upload/v1773258046/merchant_processing_fazppz.png',
      imgAlt: 'Merchant processing',
      desc: 'Streamline how you collect patient payments. We offer secure merchant processing solutions designed specifically for healthcare providers. Enjoy competitive rates, modern terminals, and a hassle-free setup for your practice.',
      bullets: [
        'Competitive, transparent processing rates',
        'Integration with major dental software platforms',
        'Secure online payment portals for patients',
        'Automated recurring billing for payment plans',
        'Next-day funding availability',
      ],
    },
  ];

  return (
    <>
     <div className="sp-wrap">
      <section className="sp-hero">
        <div className="sp-hero-bg" />
        <div className="sp-hero-content">
          <h1 className="sp-hero-title">Our Services</h1>
          <p className="sp-hero-sub">
            End-to-end revenue cycle management tailored for modern dental
            practices.
          </p>
        </div>
      </section>
 
      {/* Service Rows */}
      <div className="sp-service-outer">
        {SERVICES.map((svc, idx) => (
          <div key={svc.id}>
            <section className={`sp-service${svc.reverse ? ' reverse' : ''}`}>
              {/* Text */}
              <div className="sp-text-col">
                <h2 className="sp-service-title">
                  {svc.title}
                  {svc.badge && (
                    <span className="sp-badge">{svc.badge}</span>
                  )}
                </h2>
                <p className="sp-desc">{svc.desc}</p>
                <ul className="sp-list">
                  {svc.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
 
              {/* Image */}
              <div className="sp-img-col">
                <img src={svc.img} alt={svc.imgAlt} loading="lazy" />
              </div>
            </section>
 
            {idx < SERVICES.length - 1 && <hr className="sp-divider" />}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ServicePage;
