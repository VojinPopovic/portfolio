import { PortfolioSectionStyle } from "../../../styles/PortfolioSection.style";
import { PortfolioContentDiv } from "../../../styles/PortfolioSection.style";
import PortfolioItem from "./PortfolioItem";
import RedBlobPortfolioBackground from "../../../assets/RedBlobPortfolioBackground.svg"
import RedBlobPortfolioBackground2 from "../../../assets/RedBlobPortfolioBackground2.svg"
import LeftArrow from "../../../assets/LeftArrowButton.svg"
import RightArrow from "../../../assets/RightArrowButton.svg"

function PortfolioSection() {
  return (
    <>
      <PortfolioSectionStyle>
        <PortfolioContentDiv>
          <img src={RedBlobPortfolioBackground} alt="" className="portfolio-background-blob" />
          <img src={RedBlobPortfolioBackground2} alt="" className="portfolio-background-blob-two" />
          <img src={LeftArrow} alt="" className="left-arrow" />
          <img src={RightArrow} alt="" className="right-arrow" />
          <p className="portfolio-title">Portfolio</p>
          <div className="slider-container">
            <PortfolioItem>
              <p className="item-title">Portfolio 1</p>
              <p className="item-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita, doloribus! Lorem ipsum
              </p>
            </PortfolioItem>
            <PortfolioItem>
              <p className="item-title">Portfolio 2</p>
              <p className="item-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita, doloribus! Lorem ipsum
              </p>
            </PortfolioItem>
            <PortfolioItem>
              <p className="item-title">Portfolio 3</p>
              <p className="item-description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Expedita, doloribus! Lorem ipsum
              </p>
            </PortfolioItem>
          </div>
        </PortfolioContentDiv>
      </PortfolioSectionStyle>
    </>
  );
}

export default PortfolioSection;
