import React from "react"
import Starwars from "../Images/Starwars.jpg"
import LOL from "../Images/LOL.jpg"
import styled from "styled-components"

const Container = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 80px;

  img{
    width: 650px;
    margin: 15px;
    border: 2px solid #ffffff;
  }

  img:hover{
    cursor: pointer;
    transform: scale(1.02);
  }

  @media (max-width: 1370px){

      img{
        width: 500px
      }
  }

  @media (max-width: 1080px){

     flex-direction: column;

     img{
        width: 600px;
     }
  }

  @media (max-width: 685px){

    img{
       width: 450px;
    }
 }

  @media (max-width: 685px){

     img{
        width: 320px;
    }
  }
`

export default function Projetos(){
  return(
    <Container>
      <a href="https://github.com/RomuloRatis/Desafio-Final" target="_blank">
        <img src={Starwars} alt="star wars"/>
      </a>
      <a href="https://github.com/RomuloRatis/Layout-lol" target="_blank">
        <img src={LOL} alt="league of legends"/>
      </a>
    </Container>
  )
}