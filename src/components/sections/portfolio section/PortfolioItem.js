import { PortflolioItemStyle } from "../../../styles/PortfolioSection.style";

function PortfolioItem() {
  return (
    <PortflolioItemStyle>
      <div className="screen"></div>
      <div className="portfolio-item-description">
        <p className="title"></p>
        <p className="description"></p>
      </div>
    </PortflolioItemStyle>
  );
}

export default PortfolioItem;
