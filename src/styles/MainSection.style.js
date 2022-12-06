import styled from "styled-components";

const MainSectionDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: relative;
  overflow-x: hidden;
  & .card-container {
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-top: 80vh;
  }
  @media screen and (min-width: 800px) and (max-width: 1000px) {
    & .card-container {
      margin-top: 80vh;
    }
  }
  @media (min-width: 1200px) {
    & .card-container {
      max-width: 1200px;
      margin-top: 500px;
    }
  }
  @media (max-height: 700px) {
    & .card-container {
      margin-top: 100vh;
    }
  }
`;

export { MainSectionDiv };
