import styled from "styled-components";

const NavStyle = styled.div`
  width: 98vw;
  height: 50px;
  background-color: black;
  margin-top: 1vw;
  margin-left: 1vw;
  margin-right: 1vw;
  border-radius: clamp(0.5rem, 1vw, 2rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const HamburgerDiv = styled.div`
  width: 40%;
  height: 100%;
`;

const UnorderedList = styled.ul`
width: 100%;
height: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
 & li {
  & a{
    text-decoration: none;
    color: white;
  }
 }
`

const ContactDiv = styled.div`
  width: 20%;
  height: 60%;
  background-color: red;
  border-radius: 5px;
  margin-right: 1%;
`;
export { NavStyle, HamburgerDiv, ContactDiv, UnorderedList };
