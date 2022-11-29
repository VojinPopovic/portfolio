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
  align-items: center;
  & img {
    width: 75%;
  }
  & p {
    color: white;
  }
  & .card-text-container {
    width: 90%;
    height: auto;
  }
  & .card-title {
    font-size: clamp(1.8rem, 4vw, 2.3rem);
    margin-bottom: 10px;
    & span {
      color: #da3636;
      font-weight: 800;
      letter-spacing: -0.05em;
    }
    letter-spacing: -0.05em;
    line-height: 30px;
  }
  & .paragraph {
    font-size: clamp(0.5rem, 2.8vw, 0.92rem);
    font-weight: 300;
    letter-spacing: 0em;
  }
  & .image-container {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -140%;
    transform: translateZ(-10px);
  }
  & .me-container {
    width: auto;
    position: absolute;
    top: -63%;
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 800;
    letter-spacing: -0.05em;
    display: flex;
    & .me-paragraph {
      color: black;
      margin-right: 10px;
    }
    & span {
      color: #da3636;
    }
    & img {
      width: 50%;
      position: absolute;
      right: -40px;
      z-index: -1;
    }
  }
  @media (min-width: 1000px) {
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    & .me-container{
      left: -120%;
      top: 30%;
    }
  }
`;

export { CardStyle };
