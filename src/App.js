import { MainDiv } from "./Global.style";
import { GlobalStyles } from "./Global.style";
import Nav from "./components/sections/nav/Nav";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainDiv>
        <Nav></Nav>
      </MainDiv>
    </>
  );
}

export default App;
