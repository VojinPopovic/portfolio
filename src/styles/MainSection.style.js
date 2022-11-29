import styled from "styled-components";

const MainSectionDiv = styled.div`
  width: 100%;
  height: 1100px;
  display: flex;
  justify-content: center;
  position: relative;
  & .card-container {
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    @media (min-width: 1000px) {
      position: absolute;
      display: static;
      bottom: 0;
    }
    @media (min-width: 1200px) {
      max-width: 1200px;
    }
  }
`;

export { MainSectionDiv };
