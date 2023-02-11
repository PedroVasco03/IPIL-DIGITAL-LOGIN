import React from "react";
import {validatePassword} from "./utils/regex"

function PasswordBox(){
    const [senha, setSenha] = React.useState('');
    const [senhaErr, setSenhaErr] = React.useState(false);

    const validate = () => {
        if(!validatePassword.test(senha)){
            setSenhaErr(true)
        }else{
            setSenhaErr(false)
        }
    }
    return(
        <>
            <div className="input-field">
                <i className="bi-lock-fill"></i>
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Senha"
                    value={senha}
                    onChange={
                            (event) => {
                            setSenha (event.target.value)
                            setSenhaErr(false)}
                    } 
                    onBlur={validate}
                />
            </div>
            {senhaErr && <p>Por favor digite senha válida</p>}
        </>
    )
}

export default PasswordBox