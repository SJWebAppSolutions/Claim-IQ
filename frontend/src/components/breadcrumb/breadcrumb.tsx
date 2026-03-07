import { Link } from 'react-router-dom';
import './index.css';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <section className="breadcrumb-section">
      <div className="breadcrumb-container">
        <nav className="breadcrumb">
          {items?.map((item, index) => (
            <span key={index}>
              {item?.path ? (
                <Link to={item?.path}>{item?.label}</Link>
              ) : (
                <span className="active">{item?.label}</span>
              )}
              {index < items?.length - 1 && <span className="separator">›</span>}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
};

export default Breadcrumb;
