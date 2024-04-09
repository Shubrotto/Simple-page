import "./portfolio.css";
import { Portfolio } from "./Portfolio";

const Portfolios = () => {
  return (
    <div className="portfolio_container" style={{ paddingTop: "90px" }}>
      <h1>Portfolio</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, nihil?
      </p>
      <div className="portfolio_wrapper">
        <Portfolio className="portfolio_item" />
      </div>
    </div>
  );
};

export default Portfolios;
