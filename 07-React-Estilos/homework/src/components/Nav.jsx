import React from "react";
import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import styled from "styled-components";

const NavDiv = styled.div`
  display: inline-flexbox;
  background-color: #0b320b;
  width: 100%;
  height: 3em;
  justify-content: center;
  color: white;
  margin: 2px;
`;

const Image = styled.img`
  display: inline-flexbox;
`;

const NavH3 = styled.h3`
  display: inline-flexbox;
`;

function Nav({ onSearch }) {
  return (
    <NavDiv>
      <Image src={Logo} />
      <NavH3>Henry: weather app</NavH3>
      <SearchBar />
    </NavDiv>
  );
}

export default Nav;
