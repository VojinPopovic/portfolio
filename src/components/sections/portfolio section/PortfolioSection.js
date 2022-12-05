import { PortfolioSectionStyle } from "../../../styles/PortfolioSection.style";
import { PortfolioContentDiv } from "../../../styles/PortfolioSection.style";
import PortfolioItem from "./PortfolioItem";

function PortfolioSection() {
  return (
    <>
      <PortfolioSectionStyle>
        <PortfolioContentDiv>
          <p className="portfolio-title">Portfolio</p>
          <div className="slider-container">
            <PortfolioItem></PortfolioItem>
            <PortfolioItem></PortfolioItem>
            <PortfolioItem></PortfolioItem>
          </div>
        </PortfolioContentDiv>
      </PortfolioSectionStyle>
    </>
  );
}

export default PortfolioSection;
