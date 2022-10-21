import React from "react"
import Facebook from "../Images/Facebook.png"
import Instagram from "../Images/Instagram.png"
import Linkedin from "../Images/Linkedin.png"
import Github from "../Images/Github.png"
import styled from "styled-components"

const Container = styled.main`
  
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  

  div{
    display: flex;
    justify-content: center;
    margin-top: 200px;
    border: 2px solid #FFFAF5;
  }

  img{
    width: 35px;
    margin: 5px 15px;
  }

`
 
export default function Contatos(){
  return(
    <Container>
      <div>
        <a href="https://www.facebook.com/ratisleao" target="_blank">
          <img src={Facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/romulo.ratis/" target="_blank">
          <img src={Instagram} alt="instagram" />
        </a>
        <a href="https://www.linkedin.com/in/r%C3%B4mulo-ratis-518920237/" target="_blank">
          <img src={Linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/RomuloRatis" target="_blank">
          <img src={Github} alt="github" />
        </a>
      </div>
    </Container>
  )
}