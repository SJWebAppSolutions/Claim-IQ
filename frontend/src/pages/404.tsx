import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-wrapper">
      <div className="notfound-card">
        <div className="notfound-icon">!</div>

        <h1>404</h1>
        <h2>Page not found</h2>

        <p>
          The page you are looking for doesn't exist or has been moved.
          <br />
          Please check the URL or navigate back home.
        </p>

        <div className="notfound-actions">
          <button className="btn-primary" onClick={() => navigate("/")}>
            🏠 Return Home
          </button>

          <button className="btn-secondary" onClick={() => navigate(-1)}>
            ← Go Back
          </button>
        </div>

        <footer>© 2026 Company Name. All rights reserved.</footer>
      </div>
    </div>
  );
};

export default NotFoundPage;
