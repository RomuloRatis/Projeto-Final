import React from "react"
import html from "../Images/html.png"
import CSS3 from "../Images/CSS3.png"
import JS from "../Images/JS.png"
import Reactjs from "../Images/Reactjs.png"
import styled from "styled-components"

const Div = styled.div`
 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
  
  p{
    color: #FFFAF5;
    font-size: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    padding: 20px;
    border: 2px solid #FFFAF5;
  }

  img{
    width: 50px;
    height: 50px;
    margin-top: 5px;
  }

  @media (max-width: 1220px){
    
    p{
      font-size: 18px;
      margin: 15px;
    }
  }
 
  @media (max-width: 500px){
    
    img{
      width: 35px;
      height: 35px;
    }
  }
`


export default function Home(){
  return(
    <Div>
      <p>Olá, eu sou Rômulo Ratis, tenho 30 anos,
        estudante de desenvolviment front-end pelo curso Vainaweb nas tecnologias: <img src={html} alt="html" /> <img src={CSS3} alt="Css3" /> <img src={JS} alt="Javascript" /> <img src={Reactjs} alt="React" />
      </p>
    </Div>
  )
}