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


export default function CardSaneamento(){
    return(
        <Container>
            <ul>
                <li>
                    Voltar as obras de saneamento para que toda população tenha fornecimento de água de maneira adequada.
                </li>
                <li>
                    Organização de limpeza coletiva de terrenos baldios e lixões, evitando maior risco de enchentes nos grandes períodos de chuva. 
                </li>
                <li>
                    Maior quantidade de instalações de lixeiras em todas as ruas do Bairro.
                </li>
                <li>
                    Promover a limpeza total dos rios até 2025.
                </li>
            </ul>
        </Container>
    )
}