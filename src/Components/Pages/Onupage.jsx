import React from "react"
import styled from "styled-components"
import Modaleducaçao from "../Modal/Modaleducaçao"
import Modalfomezero from "../Modal/Modalfomezero"
import Modalsaude from "../Modal/Modalsaude"
import Modalclima from "../Modal/Modalclima"
import Modalsaneamento from "../Modal/Modalsaneamento"

const Container = styled.div`
  
  background-color: #A3917C;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 15px;

  h1{
    color: #ffffff;
    margin-bottom: 20px;
    font-family: 'Roboto Condensed', sans-serif;
  }

  p{
    font-size: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    color: #ffffff;
    width: 820px;
    margin-bottom: 20px;
  }

  div{
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 970px){
        
    h1,p{
      width: 630px;
    }
    
  }
  
  @media (max-width: 715px){
        
    h1,p{
      width: 400px;
    }
    
  }

  @media (max-width: 450px){
        
    h1,p{
      width: 310px
    }
    
  }
`





export default function Onupage(){
    return(
        <Container>
          <h1>
          Os Objetivos de Desenvolvimento Sustentável na vila São João
          </h1>
          <p>
          Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são os objetivos para os quais as Nações Unidas estão contribuindo a fim de que possamos atingir a Agenda 2025 na vila São João.
          </p>
          <div>
            <Modaleducaçao />
            <Modalfomezero />
            <Modalsaude />
            <Modalclima />
            <Modalsaneamento />
          </div>

        </Container>
    )
}