import React from "react";
import ButtonConfirm from "./ButtonConfirm";
import EmailBox from "./EmailBox"
import PasswordBox from "./PasswordBox"

function SignInForm(){
    return(
        <>
            <form className="sign-in-form">
                <h2 className="title">Entrar</h2>
                    <EmailBox/>
                    <PasswordBox/>
                    <ButtonConfirm value="Entrar"/>
            </form>
        </>
    )
}

export default SignInForm