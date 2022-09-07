import React from "react";
import styled from "styled-components";

const SearchButton = styled.button`
  background-color: black;
  display: flex;
  color: #065506;
  border: 1px solid #055905;
  border-radius: 6px;
`;
const Searchinput = styled.input`
  border-radius: 5px;
  display: inline-flex;
`;

const Searchbar = styled.div`
  background-color: #616161;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100px;
  border-radius: 15px;
`;

export default function SearchBar(props) {
  // acá va tu código
  return (
    <Searchbar>
      <Searchinput
        type="text"
        name="search"
        id="search"
        placeholder="Busca tu ciudad.."
      />
      <SearchButton onClick={props.onSearch}>Agregar</SearchButton>
    </Searchbar>
  );
}
