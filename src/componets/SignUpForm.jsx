import React from "react";
import {Link } from "react-router-dom"
import PhoneBox from "./PhoneBox";
import NameBox from "./NameBox";
import EmailBox from "./EmailBox";
import BiBox from "./BiBox";
import PasswordBox from "./PasswordBox";
import GenderField from "./GenderField";
import ButtonConfirm from "./ButtonConfirm";
import CourseBox from "./CourseBox";
import NumProcessBox from "./NumProcessBox";

function SignUpForm({user}){
    
    if (user === "aluno" ) {
    return(
        <>
            <form className="sign-up-form">
                <h2 className="title">Cadastrar-se</h2>
                <NameBox/>
                <EmailBox/>
                <PhoneBox/>
                <BiBox/>
                <PasswordBox/>
                <GenderField/>
                <Link to={'/ProsseguirAluno'}><ButtonConfirm value="Prosseguir"/></Link> 
            </form>
        </>
    )}else if(user === "coordenador"){
        return(
            <>
                <form className="sign-up-form">
                    <h2 className="title">Cadastrar-se</h2>
                    <NameBox/>
                    <EmailBox/>
                    <PhoneBox/>
                    <CourseBox/>
                    <PasswordBox/>
                    <ButtonConfirm value="Cadastrar"/>
                </form>
            </>
        )
    }else if(user === "encarregado"){
        return(
            <>
                <form className="sign-up-form">
                    <h2 className="title">Cadastrar-se</h2>
                    <NameBox/>
                    <EmailBox/>
                    <PhoneBox/>
                    <NumProcessBox/>
                    <PasswordBox/>
                    <ButtonConfirm value="Cadastrar"/>
                </form>
            </>
        )
    }else {return(<><h1>nada</h1></>)}
}

export default SignUpForm