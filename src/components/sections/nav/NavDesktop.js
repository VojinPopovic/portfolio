import { HamburgerDiv } from "../../../styles/Nav.style";
import NavUl from "./NavUl";

function NavDesktop() {
  return (
    <HamburgerDiv>
      <NavUl justify="space-between"></NavUl>
    </HamburgerDiv>
  );
}

export default NavDesktop;
