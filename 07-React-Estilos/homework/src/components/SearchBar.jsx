import React from "react";
import styled from "styled-components";

const SearchButton = styled.button`
  background-color: black;
  display: inline-flex;
  color: #065506;
  border: 1px solid #055905;
  border-radius: 6px;
  text-align: center;
  margin: auto;
`;
const Searchinput = styled.input`
  border-radius: 5px;
  display: inline-flex;
  justify-content: center;
  margin: auto;
`;

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <Searchinput
        type="text"
        name="search"
        id="search"
        placeholder="Busca tu ciudad.."
      />
      <SearchButton onClick={props.onSearch}>Agregar</SearchButton>
    </div>
  );
}
