import { NavStyle, ContactDiv } from "../../../styles/Nav.style";
import { useState, useEffect } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

function Nav() {
  const [width, setWidth] = useState(window.innerWidth);
  let breakpoint = 1000;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.removeEventListener("resize", handleResizeWindow);
    window.addEventListener("resize", handleResizeWindow);
  }, [width]);
  function renderNav() {
    if (width > breakpoint) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <NavStyle>
      {renderNav() ? (
        <NavDesktop breakpoint={renderNav()} />
      ) : (
        <NavMobile breakpoint={renderNav()} />
      )}
      <ContactDiv></ContactDiv>
    </NavStyle>
  );
}

export default Nav;
