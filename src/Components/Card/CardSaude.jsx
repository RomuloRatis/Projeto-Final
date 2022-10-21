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


export default function CardSaude(){
    return(
        <Container>
            <ul>
                <li>
                    Apliação do posto de saúde, melhorando sua estrutura com o objetivo de atendimento em todas as especialidades.
                </li>
                <li>
                   Consciêntização da população sobre a importância de cuidar da saúde, incentivando ao morador ir de ano em ano fazer seus exames de rotina, principalmente no grupo dos homens, onde a maior taxa de mortalidade.  
                </li>
                <li>
                    Construção de um centro esportivo, para que todas as pessoas tenham acesso gratuito a prática de esporte, melhorando ainda mais sua qualidade de vida.
                </li>
            </ul>
        </Container>
    )
}