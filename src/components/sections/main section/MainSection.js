import { MainSectionDiv } from "../../../styles/MainSection.style";
import { CardStyle } from "../../../styles/Card.style";

function MainSection() {
  return (
    <MainSectionDiv>
      <div className="card-container">
        <CardStyle>
          <div className="image-container"></div>
        </CardStyle>
        <CardStyle mTop="40px"></CardStyle>
      </div>
    </MainSectionDiv>
  );
}

export default MainSection;
