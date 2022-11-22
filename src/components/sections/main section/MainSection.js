import { MainSectionDiv } from "../../../styles/MainSection.style";
import { CardStyle } from "../../../styles/Card.style";
import cardImage from "./cardImage.png";

function MainSection() {
  return (
    <MainSectionDiv>
      <div className="card-container">
        <CardStyle>
          <div className="image-container">
            <img src={cardImage} alt="" />
          </div>
        </CardStyle>
        <CardStyle mTop="40px"></CardStyle>
      </div>
    </MainSectionDiv>
  );
}

export default MainSection;
