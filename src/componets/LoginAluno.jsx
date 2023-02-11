import React from "react"
import "../bootstrap-icons-1.9.1/bootstrap-icons.css"
import "../componets/Login.css"
import imagem1 from "../images/undraw_mobile_messages_re_yx8w.svg"
import imagem2 from "../images/undraw_working_re_ddwy2.svg"
import SignInForm from "./SignInForm"
import SignUpForm from "./SignUpForm"
function LoginAluno() {
   const [css, setCss] = React.useState(null)
   function ss(){
    if(css===null)
    setCss('sign-up-mode')
    else
    setCss(null)
    }
       return(
        <>
            <div className="cont_pai">
                <div className={"container "+css}>
                    <div className="forms-container">
                        <div className="signin-signup">
                            <SignInForm/>
                            <SignUpForm user="aluno"/>
                        </div>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>Novo por aqui ?</h3>
                                <p>
                                    Efetue agora o deu cadastro e venha conhecer conosco
                                    oque é o <b>IPIL Digital</b> um sistema feito a pensar em si. 
                                </p>
                                    <button className="btn transparent" id="sign-up-btn" onClick={ss} >Cadastrar-se</button>
                            </div>
                            <img src={imagem1} className="image" alt=""/>
                        </div>

                        <div className="panel right-panel">
                            <div className="content ">
                                <h3>Um de nós ?</h3>
                                <p>
                                    Efetue o login agora continue onde parou porque 
                                    o nosso sistema espera por ti, <b>IPIL Digital</b> Somos o futuro
                                </p>
                                    <button className="btn transparent"  id="sign-in-btn" onClick={ss}>Entrar</button>
                            </div>
                            <img src={imagem2} className="image" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginAluno