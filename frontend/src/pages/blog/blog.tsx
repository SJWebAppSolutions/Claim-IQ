import Breadcrumb from '../../components/breadcrumb/breadcrumb';
import blogController from './blog-controller';

const BlogPage = () => {
  const { breadcrumb } = blogController();

  return (
    <>
      {<Breadcrumb items={breadcrumb} />}

      <div>Blog Page</div>
    </>
  );
};
export default BlogPage;
