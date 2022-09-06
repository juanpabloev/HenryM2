import React from "react";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Busca tu ciudad.."
      />
      <button type="button" onClick={props.onSearch}>
        Agregar
      </button>
    </div>
  );
}
