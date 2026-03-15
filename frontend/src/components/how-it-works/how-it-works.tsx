import howItworksController from './how-it-work-controller';
import './index.css';

const HowItWorks = () => {
  const { pageData, loading } = howItworksController();
  if (loading || !pageData) return null;

  return (
    <section className="workflow-container">
      {pageData?.title && <h2 className="workflow-title">{pageData?.title}</h2>}
      {pageData?.description && (
        <p className="workflow-subtitle">{pageData?.description}</p>
      )}
      <div className="workflow-steps">
        {pageData?.steps?.map((s: any, i: number) => (
          <div key={i}>
            {s?.stepNumber && (
              <div className={`workflow-step-number ${i === 0 ? 'workflow-step-number-active' : 'workflow-step-number-inactive'}`}>
                {s?.stepNumber}
              </div>
            )}
            {s?.title && <div className="workflow-step-title">{s?.title}</div>}
            {s?.description && <div className="workflow-step-description">{s?.description}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
