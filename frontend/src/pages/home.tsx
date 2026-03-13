import { CtaBanner } from "../components/cta-banner";
import { HeroBanner } from "../components/hero-banner";
import { HowToWorks } from "../components/how-it-works";
import { TwoColumnGrid } from "../components/two-column-grid";


const HomePage = () => {
  return (
    <>
      <HeroBanner />
      <TwoColumnGrid />
      <HowToWorks />
      <CtaBanner />
    </>
  );
};
export default HomePage;
