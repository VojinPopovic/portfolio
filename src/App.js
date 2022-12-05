import { MainDiv } from "./Global.style";
import { GlobalStyles } from "./Global.style";
import Nav from "./components/sections/nav/Nav";
import MainSection from "./components/sections/main section/MainSection";
import PortfolioSection from "./components/sections/portfolio section/PortfolioSection";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainDiv>
        <Nav></Nav>
        <MainSection></MainSection>
        <PortfolioSection></PortfolioSection>
      </MainDiv>
    </>
  );
}

export default App;
