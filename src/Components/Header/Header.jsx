import React from "react"
import { GlobalStyle } from "../Global/Style"
import styled from "styled-components"
import Rômulo from "../Images/Rômulo.jpeg"

const Container = styled.header`
    
    background-color: #0F6466;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;

    nav{
      display: flex;
    }
`



const Figure = styled.figure`
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    

    img{
      width: 300px;
      height: 300px;
      object-fit: cover;
      border: 5px solid #0F6466;
      border-radius: 50%;
    }

`

export default function Header(){
  return(
    <Container>
    <GlobalStyle />
      <Figure>
          <img src={Rômulo} alt="Rômulo Ratis" />
      </Figure>
    </Container>
  )
}