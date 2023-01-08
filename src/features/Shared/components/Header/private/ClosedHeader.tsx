import { Link } from "react-router-dom";
import styles from "../HeaderFacade.module.css";

const { container, headerTop, headerBottom, closed, home } = styles;

const ClosedHeader = () => {
  return (
    <div className={container}>
      <div className={headerTop}>
        <Link to="/closed">
          <h1 className={closed}>#Closed</h1>
        </Link>
      </div>
      <div className={headerBottom}>
        <Link to="/">
          Return to<span className={home}> #home</span>
        </Link>
      </div>
    </div>
  );
};

export default ClosedHeader;
