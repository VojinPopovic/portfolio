import { NavStyle, ContactDiv } from "../../../styles/Nav.style";
import { useState, useEffect } from "react";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

function Nav() {
  const [width, setWidth] = useState(window.innerWidth);
  let breakpoint = 1200;

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
      <ContactDiv>
        {/* prettier-ignore */}
        <svg xmlns="http://www.w3.org/2000/svg" width="1.3rem" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path fill="white" d="m222 158.4l-46.9-20a15.6 15.6 0 0 0-15.1 1.3l-25.1 16.7a76.5 76.5 0 0 1-35.2-35L116.3 96a15.9 15.9 0 0 0 1.4-15.1L97.6 34a16.3 16.3 0 0 0-16.7-9.6A56.2 56.2 0 0 0 32 80c0 79.4 64.6 144 144 144a56.2 56.2 0 0 0 55.6-48.9a16.3 16.3 0 0 0-9.6-16.7ZM176 208A128.1 128.1 0 0 1 48 80a40 40 0 0 1 34.9-39.7L103 87.2l-16.7 25.4a16 16 0 0 0-1 15.7a92.5 92.5 0 0 0 42.8 42.6a16 16 0 0 0 15.7-1.1l25-16.7l46.9 20A40 40 0 0 1 176 208ZM152 96V56a8 8 0 0 1 16 0v20.7l34.3-34.4a8.1 8.1 0 0 1 11.4 11.4L179.3 88H200a8 8 0 0 1 0 16h-42.3l-.4-.2h-.4l-.3-.2h-.4l-.3-.2l-.3-.2l-.3-.3l-.4-.2l-.4-.4h-.2a.3.3 0 0 0-.1-.2c-.1-.2-.3-.3-.4-.4a.8.8 0 0 1-.2-.4l-.2-.3l-.3-.3l-.2-.3c0-.2-.1-.3-.1-.4l-.2-.3c0-.2-.1-.3-.1-.4l-.2-.4a.8.8 0 0 0-.1-.4v-.3a.9.9 0 0 1-.1-.5a.4.4 0 0 0-.1-.3Z"/></svg>
        <p>CONTACT</p>
      </ContactDiv>
    </NavStyle>
  );
}

export default Nav;
