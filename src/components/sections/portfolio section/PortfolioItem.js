import { PortflolioItemStyle } from "../../../styles/PortfolioSection.style";

function PortfolioItem(props) {
  return (
    <PortflolioItemStyle>
      <div className="screen"></div>
      <div className="portfolio-item-description">{props.children}</div>
    </PortflolioItemStyle>
  );
}

export default PortfolioItem;
