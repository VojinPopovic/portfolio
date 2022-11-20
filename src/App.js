import { MainDiv } from "./Global.style";
import { GlobalStyles } from "./Global.style";
import Nav from "./components/sections/nav/Nav";
import MainSection from "./components/sections/main section/MainSection";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainDiv>
        <Nav></Nav>
        <MainSection></MainSection>
      </MainDiv>
    </>
  );
}

export default App;
