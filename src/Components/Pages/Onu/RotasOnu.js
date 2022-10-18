import React from "react"
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import styled from "styled-components"
import Asfalto from "./Objetivos/Asfalto";
import Cultura from "./Objetivos/Cultura";
import Lazer from "./Objetivos/Lazer";
import Saneamento from "./Objetivos/Saneamento";


export default function RotasOnu() {
    return(
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/Asfalto">Asfalto</Link>
                </li>
                <li>
                    <Link to="/Saneamento">Saneamento</Link>
                </li>
                <li>
                    <Link to="/Cultura">Cultura</Link>
                </li>
                <li>
                    <Link to="/Lazer">Lazer</Link>
                </li>
            </ul>
        </div>
     <Routes>
        <Route path="/Asfalto" element={<Asfalto />} />
        <Route path="/Saneamento" element={<Saneamento />} />
        <Route path="/Cultura" element={<Cultura />} />
        <Route path="/Lazer" element={<Lazer />} />
      </Routes>
    </Router> 
    )
}
    
