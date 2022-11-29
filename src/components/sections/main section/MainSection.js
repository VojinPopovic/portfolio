import { MainSectionDiv } from "../../../styles/MainSection.style";
import { CardStyle } from "../../../styles/Card.style";
import cardImage from "../../../assets/cardImage.png"
import BlackBlobVojin from "../../../assets/BlackBlobVojin.svg";

function MainSection() {
  return (
    <MainSectionDiv>
      <div className="card-container">
        <CardStyle right="-20%">
          <div className="image-container">
            <img src={cardImage} alt="" />
            <div className="me-container">
              <p className="me-paragraph">Hi, i'm</p>
              <span> Vojin</span>
              <img src={BlackBlobVojin} alt="" />
            </div>
          </div>
          <div className="card-text-container">
            <p className="card-title">
              A<span> frontend </span>
              <br />
              developer
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              ducimus explicabo atque quas sapiente? Laboriosam, vel quisquam
              iure vero laudantium totam? Reprehenderit explicabo ad veniam ab
              ipsam ea magnam porro temporibus aliquam impedit, autem, molestiae
              ex exercitationem? Nesciunt, vitae porro.
            </p>
          </div>
        </CardStyle>
        <CardStyle mTop="40px" left="-20%">
          <div className="card-text-container">
            <p className="card-title">
              Always interested in
              <br />
              learning
              <span> new </span>
              things
            </p>
            <p className="paragraph">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              ducimus explicabo atque quas sapiente? Laboriosam, vel quisquam
              iure vero laudantium totam? Reprehenderit explicabo ad veniam ab
              ipsam ea magnam porro temporibus aliquam impedit, autem, molestiae
              ex exercitationem? Nesciunt, vitae porro.
            </p>
          </div>
        </CardStyle>
      </div>
    </MainSectionDiv>
  );
}

export default MainSection;
