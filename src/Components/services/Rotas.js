import React from "react"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Contatos from "../Pages/Contatos";
import Projetos from "../Pages/Projetos";
import Home from "../Pages/Home";
import Onupage from "../Pages/Onupage";
import styled from "styled-components"

const Nav = styled.nav`
  background-color: #F0E0CE;
  diplay: flex;
  width: 100%;
  
  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    list-style: none;
    height: 60px;
  }


  li{
    font-size: 25px;
    margin: 10px 55px;
    font-family: 'Roboto Condensed', sans-serif;
  }

  li:hover{
    border: 2px solid #6C93A3;
    padding: 5px 15px;
    margin: 10px 38px;
  }

  @media (max-width: 685px){

    li{
      font-size: 20px;
      margin: 5px 30px;
    }

    li:hover{
        margin: 10px 15px;
        padding: 5px 13px;
    }

  }

  @media (max-width: 500px){

    li{
      font-size: 17px;
      margin: 5px 17px;
    }

    li:hover{
      margin: 10px 11px;
      padding: 5px 4px;
    }

  }

`

export default function Rotas() {
  return (
  <Router>
      <Nav>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Projetos">Projetos</Link>
            </li>
            <li>
              <Link to="/Contatos">Contatos</Link>
            </li>
            <li>
              <Link to="/Onupage">Onupage</Link>
            </li>
          </ul>
      </Nav>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projetos" element={<Projetos />} />
      <Route path="/Contatos" element={<Contatos />} />
      <Route path="/Onupage" element={<Onupage />} />
    </Routes>
  </Router>
  )
}