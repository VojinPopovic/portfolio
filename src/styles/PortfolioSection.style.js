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
  @media (max-width: 1200px) {
    width: 90vw;
    height: 60vw;
  }
`;

const PortflolioItemStyle = styled.div`
  width: 30%;
  height: 100%;
  border: 4px white solid;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  & .screen {
    margin-top: 5%;
    width: 90%;
    height: 55%;
    border: 4px white solid;
    border-radius: 5px;
  }
`;

export { PortfolioSectionStyle, PortfolioContentDiv, PortflolioItemStyle };
