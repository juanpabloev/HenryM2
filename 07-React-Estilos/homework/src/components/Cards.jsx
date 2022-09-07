import React from "react";
import Card from "./Card";
import styled from "styled-components";

const CardsDiv = styled.div`
  display: inline-flexbox;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  width: 50%;
  margin: auto;
`;

export default function Cards(props) {
  return (
    <CardsDiv>
      {props.cities.map((city) => (
        <Card
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}
          key={city.id}
        />
      ))}
    </CardsDiv>
  );
}
