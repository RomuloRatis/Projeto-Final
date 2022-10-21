import React, {useState} from "react";
import styled from "styled-components";
import CardSaneamento from "../Card/CardSaneamento"
import Saneamento from "../Images/Saneamento.jpg"


const Container = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 25px 0px;

  button{
    background-color: #F0E0CE;
    font-size: 15px;
    width: 80px;
    height: 30px;
    margin-top: 5px;
    paddin: 15px;
    cursor: pointer;
    border: none;
  }

  img{
    width: 120px;
  }
`


export default function Modalsaneamento() {

  const [status, setStatus] = useState(false);
  function openCard(){
    setStatus(!status);
  }

  return (
    <Container >
        <img src={Saneamento} alt="Saneamento" />
        <button onClick={() => {openCard()}}>{status ? "Fechar" : "Abrir"}</button>
      {status && <CardSaneamento />}
    </Container>
  );
}