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
  & .card-text-container {
    width: 90%;
    height: auto;
    color: white;
  }
  & .card-title {
    font-size: clamp(1.8rem, 4vw, 2.3rem);
    margin-bottom: 10px;
    letter-spacing: -0.05em;
    line-height: 30px;
    & span {
      color: #da3636;
      font-weight: 800;
    }
  }
  & .paragraph {
    font-size: clamp(0.5rem, 2.8vw, 0.92rem);
    font-weight: 300;
  }
  & .image-container {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -135%;
    transform: translateZ(-10px);
  }
  & .me-container {
    width: auto;
    position: absolute;
    top: -63%;
    font-size: clamp(2.5rem, 4vw, 3rem);
    font-weight: 700;
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
  & .background-blob {
    position: absolute;
    width: 60%;
    z-index: -1;
  }
  & .card-image {
    width: 70%;
  }
  & .red-blob-card-image {
    right: -15%;
    bottom: -10%;
  }
  & .red-blob-about-card {
    width: 45%;
    top: -30%;
    left: -15%;
    transform: translateZ(-10px);
  }
  @media (min-width: 1200px) {
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    & .me-container {
      left: -127%;
      top: 30%;
    }
  }
`;

export { CardStyle };
