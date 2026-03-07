import scrollToTopController from './scroll-to-top-controller';
import './index.css';
import { scrollToTop } from '../../assets/icon';

const ScrollToTop = () => {
  const { show, scrollTop, theme } = scrollToTopController();
  
  return (
    <div
      className={`scroll-top-wrapper ${theme} ${show ? 'show' : ''}`}
      onClick={scrollTop}>
      <div className="scroll-top-btn">
        <img src={scrollToTop} alt="ScrollToTop" />
      </div>
      <span className="scroll-text">Scroll to top</span>
    </div>
  );
};

export default ScrollToTop;
