import React from "react";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input type="text" />
      <button type="button" onClick={props.onSearch}>
        Agregar
      </button>
    </div>
  );
}
