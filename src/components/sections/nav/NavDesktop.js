import { HamburgerDiv } from "../../../styles/Nav.style";
import { UnorderedList } from "../../../styles/Nav.style";

function NavDesktop() {
  return (
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
  );
}

export default NavDesktop;
