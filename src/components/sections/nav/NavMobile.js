import { UnorderedList } from "../../../styles/Nav.style";
import { HamburgerDiv } from "../../../styles/Nav.style";
import { useRef } from "react";

function NavMobile(props) {
  const hamOpenRef = useRef();
  const hamCloseRef = useRef();
  const ulRef = useRef();

  function displayHandler() {
    if (!props.breakpoint) {
      return "none";
    }
  }

  function hamburgerOpen() {
    hamOpenRef.current.style.display = "none";
    hamCloseRef.current.style.display = "flex";
    ulRef.current.style.display = "flex";
  }
  function hamburgerClose() {
    hamCloseRef.current.style.display = "none";
    hamOpenRef.current.style.display = "flex";
    ulRef.current.style.display = "none";
  }

  return (
    <HamburgerDiv>
      {/* prettier-ignore */}
      <div className="hamburger-open hamburger" onClick={hamburgerOpen} ref={hamOpenRef}>
        {/* prettier-ignore */}
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeDasharray="24" strokeDashoffset="24" strokeLinecap="round" strokeWidth="2"><path d="M5 5H19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="24;0"/></path><path d="M5 12H19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="24;0"/></path><path d="M5 19H19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="24;0"/></path></g></svg>
      </div>
      {/* prettier-ignore */}
      <div className="hamburger-close hamburger" onClick={hamburgerClose} ref={ hamCloseRef}>
        {/* prettier-ignore */}
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeLinecap="round" strokeWidth="2"><path d="M5 5L12 5L19 5"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 5L19 5;M5 5L12 12L19 5"/></path><path d="M5 12H19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12"/></path><path d="M5 19L12 19L19 19"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 19L12 19L19 19;M5 19L12 12L19 19"/></path></g></svg>
      </div>
      <div className="ul-container" display={displayHandler()} ref={ulRef}>
        <UnorderedList>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">ABOUT ME</a>
          </li>
          <li>
            <a href="/">PORTFOLIO</a>
          </li>
        </UnorderedList>
      </div>
    </HamburgerDiv>
  );
}

export default NavMobile;
