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


export default function CardFomezero(){
    return(
        <Container>
            <ul>
                <li>
                    Maior quantidade de investimento para a merenda escolar, onde os alunos tenham alimentação de qualidade e orgânica integralmente.
                </li>
                <li>
                    Utilização das grandes terras vazias para construção de hortas e agroflorestas, para produzir alimentação sustentável para todo bairro.
                </li>
                <li>
                    Distribuíção de cestas básicas para todas as famílias que não conseguem manter adequadamente sua alimentação do dia a dia.
                </li>
            </ul>
        </Container>
    )
}