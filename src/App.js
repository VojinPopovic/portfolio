import { MainDiv } from "./Global.style";
import { GlobalStyles } from "./Global.style";
import { NavStyle, HamburgerDiv, ContactDiv } from "./styles/Nav.style";
import { UnorderedList } from "./styles/Nav.style";

function App() {
  return (
    <>
      <GlobalStyles />
      <MainDiv>
        <NavStyle>
          <HamburgerDiv>
            <UnorderedList>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About me</a>
              </li>
              <li>
                <a href="/">Portfolio</a>
              </li>
            </UnorderedList>
          </HamburgerDiv>
          <ContactDiv>
          </ContactDiv>
        </NavStyle>
      </MainDiv>
    </>
  );
}

export default App;
