import styled from "styled-components";

const MainSectionDiv = styled.div`
  width: 100%;
  height: 1300px;
  display: flex;
  justify-content: center;
  & .card-container {
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
`;

export { MainSectionDiv };
