import styled from "styled-components";

const CardStyle = styled.div`
  width: clamp(10rem, 90vw, 25rem);
  height: clamp(8rem, 50vw, 15rem);
  background-color: black;
  border-radius: 12px;
  margin-top: ${(props) => props.mTop};
  position: relative;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  & img{
    width: 75%;
  }
  & p {
    color: white;
  }
  & .image-container {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -140%;
    transform: translateZ(-10px)
  }
`;

export { CardStyle };
