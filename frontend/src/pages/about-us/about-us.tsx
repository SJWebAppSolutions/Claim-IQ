import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import aboutUsController from './about-us-controller';

const AboutPage = () => {
  const { breadcrumb } = aboutUsController();

  return (
    <>
      {<Breadcrumb items={breadcrumb} />}
      <div>About Page</div>
    </>
  );
};

export default AboutPage;
