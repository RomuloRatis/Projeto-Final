import React from "react"
import styled from "styled-components"
import Rotas from "../services/Rotas"

const Container = styled.main`

    background-color: #A3917C;
    height: 700px;
`

export default function Main(){
    return(
        <Container>
            <Rotas />
        </Container>
    )
}