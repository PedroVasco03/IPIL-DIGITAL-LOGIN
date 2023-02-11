import React from "react"
import "../bootstrap-icons-1.9.1/bootstrap-icons.css"
import imagem from "../images/undraw_working_re_ddwy2.svg"
import "../componets/Login.css"
import "../componets/Prosseguir.css"
import { Link } from "react-router-dom"
import SignUpForm2 from "./SignUpForm2"

function Prosseguir() {
    return(
        <>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <SignUpForm2/>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>Algum problema ?</h3>
                            <p> Caso insiras alguma informação errada saiba que 
                                existe aqui a opção de regressares a página anterior, 
                                clique em <strong>Voltar</strong> e atualize as suas informações.</p>
                               <Link to={'/'}><button className="btn transparent" id="sign-up-btn">Voltar</button></Link>
                        </div>
                        <img src={imagem} className="image" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Prosseguir