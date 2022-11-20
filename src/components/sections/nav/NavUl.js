import { UnorderedList } from "../../../styles/Nav.style";

function NavUl(props) {
  return (
    <UnorderedList fDirection={props.fDirection} justify={props.justify}>
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
  );
}

export default NavUl;
