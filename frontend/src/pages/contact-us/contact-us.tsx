import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import contantUsController from './contact-us-controller';

const ContactPage = () => {
  const { breadcrumb } = contantUsController();

  return (
    <>
      {<Breadcrumb items={breadcrumb} />}

      <div>Contact Page</div>
    </>
  );
};
export default ContactPage;
