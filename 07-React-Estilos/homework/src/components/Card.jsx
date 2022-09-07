import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  background-color: #000000;
  color: #115519;
  display: inline-block;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #115519;
  border-radius: 12px;
  margin: 2px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.2);
  }
`;

const Cardh2 = styled.h2`
  display: flexbox;
  align-items: center;
  justify-content: center;
`;

const Cardbutton = styled.button`
  display: inline-flex;
  margin-left: 85%;
  margin-top: 3%;
  text-align: center;

  width: 25px;
  height: 30px;
  height: auto;
  border: none;
  background-color: red;
  color: white;
  border-radius: 4px;
  &:hover {
    color: blue;
    background-color: black;
    border: 1px solid blue;
    border-radius: 3px;
  }
`;

const Parrafo = styled.p`
  display: inline-block;
  margin: 5px;
`;

const ImgCard = styled.img`
  display: inline-block;
`;

export default function Card(props) {
  // acá va tu código
  return (
    <CardDiv>
      <Cardbutton type="button" onClick={props.onClose}>
        X
      </Cardbutton>
      <Cardh2>{props.name}</Cardh2>
      <Parrafo>
        <b>Min:</b>
        {props.min}
      </Parrafo>
      <Parrafo>
        <b>Max:</b>
        {props.max}
      </Parrafo>
      <ImgCard
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt="weather condition"
      />
    </CardDiv>
  );
}
