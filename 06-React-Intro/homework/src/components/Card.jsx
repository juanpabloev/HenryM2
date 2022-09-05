import React from "react";

export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <h2>{props.name}</h2>
      <button type="button" onClick={props.onClose}>
        X
      </button>
      <p>min:{props.min}</p>
      <p>max:{props.max}</p>
      <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="weather condition"
        srcset=""
      />
    </div>
  );
}
