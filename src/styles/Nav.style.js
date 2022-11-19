import styled from "styled-components";

const NavStyle = styled.div`
  width: 99%;
  height: 50px;
  background-color: black;
  border-radius: clamp(0.4rem, 1vw, 0.6rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  margin: 0.4vw auto;
`;

const HamburgerDiv = styled.div`
  width: 20%;
  height: 100%;
`;

const UnorderedList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15%;
  display: ${props => props.display};
  & li {
    list-style: none;
    & a {
      text-decoration: none;
      color: white;
    }
  }
`;

const ContactDiv = styled.div`
  width: clamp(5rem, 15vw, 9rem);
  height: 60%;
  background-color: red;
  border-radius: 5px;
  margin-right: 9px;
`;
export { NavStyle, HamburgerDiv, ContactDiv, UnorderedList };
