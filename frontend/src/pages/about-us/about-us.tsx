// import Breadcrumb from '../../components/breadcrumb/breadcrumb';
// import aboutUsController from './about-us-controller';

const AboutPage = () => {
  // const { breadcrumb } = aboutUsController();

  return (
    <>
     <div className="about-wrapper">

         <section className="hero-section">
           <div className="hero-content">
             <h1 className="hero-title">About Claim IQ</h1>
             <p className="hero-subtitle">
               Empowering dental practices with intelligent, technology-driven revenue cycle management.
             </p>
           </div>
         </section>

         <section className="story-section">
           <div className="story-text">
             <h2>Our Story</h2>
             <p>
               Claim IQ was founded by a team of healthcare administrators and technology experts who saw a recurring problem: brilliant dentists were spending too much time fighting insurance companies and too little time focusing on patient care.
             </p>
             <p>
               We realized that traditional billing companies were often just as inefficient as the insurance providers they were dealing with. We set out to build a different kind of company—one that combines deep dental billing expertise with intelligent technology to simplify the entire process.
             </p>
             <p>
               Today, Claim IQ serves hundreds of dental practices nationwide, recovering millions of dollars in previously denied or delayed claims, and bringing peace of mind to practice owners and office managers alike.
             </p>
           </div>
           <div className="story-image">
             <img
               src="https:res.cloudinary.com/dzvom7900/image/upload/v1773257529/about_story_wjwntl.png"
               alt="Dental billing story - tooth model with calculator and paperwork"
             />
           </div>
         </section>

         <section className="mv-section">
           <div className="mv-card">
             <div className="mv-icon">
               <img src="https:res.cloudinary.com/dzvom7900/image/upload/v1773257528/mission_ioldvj.png" alt="Mission icon" />
             </div>
             <div className="mv-text">
               <h3>Our Mission</h3>
               <p>
                 To simplify the business of dentistry by providing transparent, efficient, and highly effective revenue cycle management services, allowing dental professionals to focus entirely on clinical excellence.
               </p>
             </div>
           </div>

           <div className="mv-card">
             <div className="mv-icon">
               <img src="https:res.cloudinary.com/dzvom7900/image/upload/v1773257529/vision_vnmnwk.png" alt="Vision icon" />
             </div>
             <div className="mv-text">
               <h3>Our Vision</h3>
               <p>
                 To be the most trusted financial partner for dental practices nationwide, setting the industry standard for billing accuracy, technological integration, and client satisfaction.
               </p>
             </div>
           </div>
         </section>

       </div>
    </>
  );
};

export default AboutPage;
