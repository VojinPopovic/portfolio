import styled from "styled-components";

const CardStyle = styled.div`
  width: clamp(10rem, 90vw, 25rem);
  height: clamp(5rem, 40vw, 15rem);
  background-color: black;
  border-radius: 12px;
  margin-top: ${(props) => props.mTop};
  position: relative;
  & p{
    color: white;
  }
  & .image-container {
    width: 200px;
    height: 320px;
    background: url("../../../assets/cardImage.png");
    background-size: cover;
    background-color: purple;
    position: absolute;
    top: -200px;

  }
`;

export { CardStyle };
