import styled from "styled-components";

const MainSectionDiv = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  background-color: green;

  & .card-container {
    width: 95%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 600px;
    background-color: red;
  }
`;

export { MainSectionDiv };
