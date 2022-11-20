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
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 5%;
  & .hamburger {
    width: auto;
    height: 100%;
  }
  & .hamburger-close {
    display: none;
  }
  & .ul-container {
    position: absolute;
    margin-top: calc(0.4vw + 130px);
    left: 0;
    right: 0;
    margin-inline: auto;
    width: 100%;
    height: 100px;
    background-color: black;
    display: ${(props) => props.display};
  }
`;

const UnorderedList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex-direction: column;
  & li {
    list-style: none;
    & a {
      text-decoration: none;
      color: white;
      font-size: 0.9rem;
    }
  }
`;

const ContactDiv = styled.div`
  width: clamp(7rem, 15vw, 9rem);
  height: 60%;
  background-color: red;
  border-radius: 8px;
  margin-right: 9px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  & p {
    height: 100%;
    display: flex;
    align-items: center;
    color: white;
    font-size: clamp(0.3rem, 2.2vw, 0.9rem);
  }
`;
export { NavStyle, HamburgerDiv, ContactDiv, UnorderedList };
