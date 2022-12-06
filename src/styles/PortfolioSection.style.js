import styled from "styled-components";

const PortfolioSectionStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PortfolioContentDiv = styled.div`
  width: 900px;
  height: 60%;
  background-color: black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 0;
  transform-style: preserve-3d;
  & .slider-container {
    width: 80%;
    height: 55%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .portfolio-title {
    width: 200px;
    text-align: center;
    position: absolute;
    color: white;
    font-size: 25px;
    top: 0;
    left: 0;
    right: 0;
    margin: 20px auto;
  }
  & .portfolio-background-blob{
    position: absolute;
    z-index: -1;
    width: 90%;
  } 
  & .portfolio-background-blob-two{
    position: absolute;
    width: 90%;
    transform: translateZ(-10px);
    left: -18%;
    top: -12%;
  } 
  & .left-arrow, .right-arrow{
    position: absolute;
    width: 10%;
  }
  & .left-arrow{
    left: 0;
  }
  & .right-arrow{
    right: 0;
  }
  @media (max-width: 1200px) {
    width: 90vw;
    height: 60vw;
  }
`;

const PortflolioItemStyle = styled.div`
  width: 30%;
  height: 100%;
  border: 2px white solid;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: black;
  & .screen {
    margin-top: 7.5%;
    width: 85%;
    height: 55%;
    border: 2px white solid;
    border-radius: 5px;
  }
  & .portfolio-item-description{
    width: 85%;
    height: 45%;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & .item-title{
      font-size: 1rem;
    }
    & .item-description{
      font-size: 0.6rem;
    }
  }
`;

export { PortfolioSectionStyle, PortfolioContentDiv, PortflolioItemStyle };
