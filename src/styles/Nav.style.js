import styled from "styled-components";

const NavStyle = styled.div`
  width: 99.5%;
  height: 50px;
  background-color: black;
  border-radius: clamp(0.4rem, 1vw, 0.6rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  right: 0;
  left: 0;
  margin: 0.2vw auto;
  z-index: 200;
`;

const HamburgerDiv = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3%;
  z-index: 0;
  & .hamburger {
    width: auto;
    height: 100%;
  }
  & .hamburger-close {
    display: none;
  }
  & .ul-container {
    position: absolute;
    margin-top: calc(0.4vw + 235px);
    left: 0;
    right: 0;
    margin-inline: auto;
    width: 100%;
    height: 200px;
    background-color: black;
    display: ${(props) => props.display};
    border-bottom-left-radius: clamp(0.4rem, 1vw, 0.6rem);
    border-bottom-right-radius: clamp(0.4rem, 1vw, 0.6rem);
  }
`;

const UnorderedList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: center;
  display: flex;
  flex-direction: ${(props) => props.fDirection};
  & li {
    list-style: none;
    & a {
      text-decoration: none;
      color: white;
      font-size: 0.8rem;
    }
  }
`;

const ContactDiv = styled.div`
  width: clamp(5rem, 20vw, 7rem);
  height: 70%;
  background-color: red;
  border-radius: 8px;
  margin-right: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  & p {
    height: 100%;
    display: flex;
    align-items: center;
    color: white;
    font-size: clamp(0.55rem, 1.9vw, 0.7rem);
    font-weight: 700;
    margin-left: 5%;
  }
  & svg{
    width: clamp(1.1rem, 3vw, 1.4rem);

  }
`;
export { NavStyle, HamburgerDiv, ContactDiv, UnorderedList };
