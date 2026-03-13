import './index.css';

const HowItWorks = () => {
  const STEPS = [
    {
      num: '01',
      on: true,
      title: 'Schedule Consultation',
      desc: "We discuss your practice's specific needs, current challenges, and goals to build a tailored plan.",
    },
    {
      num: '02',
      on: false,
      title: 'Onboarding & Setup',
      desc: 'Seamless integration with your existing dental software and secure credentialing.',
    },
    {
      num: '03',
      on: false,
      title: 'We Handle Billing',
      desc: 'Our experts take over verification, claim submission, and follow-ups.',
    },
    {
      num: '04',
      on: false,
      title: 'You Get Paid Faster',
      desc: 'Enjoy improved cash flow, fewer denials, and transparent reporting.',
    },
  ];

  return (
    <section className="how-sec">
      <h2 className="sec-title">How it works</h2>
      <p className="sec-sub">
        A professionally structured onboarding process that ensures minimal
        disruption to your practice operations
      </p>
      <div className="steps">
        {STEPS.map((s, i) => (
          <div key={i}>
            <div className={`s-circle ${s.on ? 's-on' : 's-off'}`}>{s.num}</div>
            <div className="s-title">{s.title}</div>
            <div className="s-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
