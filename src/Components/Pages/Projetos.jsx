import React from "react"
import Starwars from "../Images/Starwars.jpg"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 100px;


  h2{
    font-size: 30px;
    font-family: 'Roboto Condensed', sans-serif;
  }

  img{
    width: 450px;
    margin-top: 15px;
  }

  img:hover{
    cursor: pointer;
    transform: scale(1.04);
  }

  @media (max-width: 500px){

    img{
      width: 350px
    }
  }

  @media (max-width: 365px){

    img{
      width: 275px
    }
  }
`

export default function Projetos(){
  return(
    <Container>
      <h2>Star Wars</h2>
      <a href="">
        <img src={Starwars} alt="star wars"/>
      </a>
    </Container>
  )
}