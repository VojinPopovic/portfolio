import { UnorderedList } from "../../../styles/Nav.style";
import { HamburgerDiv } from "../../../styles/Nav.style";

function NavMobile(props) {
  function displayHandler() {
    if (!props.breakpoint) {
        return "none"
    }
  }
  return (
    <HamburgerDiv>
      <UnorderedList display={displayHandler()}>
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
  );
}

export default NavMobile;
