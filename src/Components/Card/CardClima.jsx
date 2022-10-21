import React from "react"
import styled from "styled-components"

const Container = styled.div`
    
    background-color: #F0E0CE;
    display: flex;
    width: 900px;
    margin: 20px 0px;
    padding: 15px;

    li{
        font-size: 25px;
        font-family: 'Roboto Condensed', sans-serif;
        color: #164773;
        width: 100%;
        list-style: none;
        margin: 15px 0px;
    }

    @media (max-width: 970px){
        
        width: 650px;

        li{
            font-size: 22px;
        }
        
      }
      
      @media (max-width: 715px){
        
        width: 400px;

      }

      @media (max-width: 450px){
        
        width: 300px;

        li{
            font-size: 19px;
        }
      }

`


export default function CardClima(){
    return(
        <Container>
          <ul>
            <li>
                Reflorestar as áreas danificadas pelas queimadas naturais que ocorrem todos os anos, e criar alguma estratégia de prevenção pra diminuir as queimadas naturais
            </li>
            <li>
                Incentivar o reflorestamento urbano, mostrando ao morador como as árvores modificam a nossa qualidade de vida, criando um bairro totalmente arborizado.
            </li>
            <li>
                Incentivar meio alternativos de transportes, que sejam menos poluentes e diminuam a emissão de gases poluentes
            </li>
            <li>
                Criar um projeto pra captação de energiar solar que possa distribuir toda essa energia pelo bairro de maneira renovável
            </li>
          </ul>
        </Container>
    )
}