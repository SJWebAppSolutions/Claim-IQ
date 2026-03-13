import './index.css';

const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-c">
        <h1 className="hero-title">
          <span className="gold">Streamline</span> Your Revenue With Total{' '}
          <span className="gold">Confidence</span>
        </h1>
        <p className="hero-sub">
          Expert insurance billing, verification, and claims management designed
          for high-performing dental practices.
        </p>
        <div className="hero-btns">
          <button className="hbp">Schedule Your Free Consultation</button>
          <button className="hbs">Explore Services</button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
