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


export default function CardEducaçao(){
    return(
        <Container>
            <ul>
                <li>
                    Fazer a manutenção das escolas do bairro e a contratação de novos professores para os alunos conseguirem ter 100% das aulas no ano letivo.
                </li>
                <li>
                    Implementação nas escolas de um projeto de pré-vestibular, aulas diárias de novos idiomas e aprendizado de instrumentos musicais. 
                </li>
                <li>
                    Construção de uma biblioteca, com salas de estudos e acesso a internet, ajudando aqueles que não possuem privilégio de estudar em casa de maneira adequada.
                </li>
                <li>
                    Fornecimento de ônibus escolares, com objetivo de trazer e levar os alunos de todas as escolas em segurança.
                </li>
            </ul>
        </Container>
    )
}