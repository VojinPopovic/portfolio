import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  background: transparent;
  box-sizing: border-box;
 }

 .active{
  outline: 1px white solid;
  outline-offset: -1px;
  border-radius: clamp(0px, 1vw, 5px);
 }
 ul{
  overflow: visible;
 }
`;

const MainDiv = styled.div`
  width: 100%;
  height: 300vh;
`;

export { GlobalStyles, MainDiv };
