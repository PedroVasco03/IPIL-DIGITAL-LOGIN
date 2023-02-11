import React from "react";
import { validateName } from "./utils/regex";
    function deteta (e){
            const Code = (e.charCode ? e.charCode : e.wich);
            if(Code > 40 && Code <=62){
                e.preventDefault()
            }
        }

function NameBox(){
    const [nome, setNome] = React.useState('');
    const [nomeErr, setNomeErr] = React.useState('');

    const validate = () => {
        if(!validateName.test(nome)){
            setNomeErr(true)
        }else{
            setNomeErr(false)
        }
    }
    
    
    return(
        <>
            <div className="input-field">
                <i className="bi-person-fill"></i>
                <input 
                    type="text" 
                    name="usernew" 
                    placeholder="Nome" 
                    value={nome}
                    id="nome"
                    onKeyPress={deteta  }
                    onChange={
                        (event) => {
                        setNome (event.target.value)
                        setNomeErr(false)
                        }
                    } 
                onBlur={validate}
                
                />
            </div>
            {nomeErr && <p>Por favor digite nome válido</p>}
        </>
    )
}

export default NameBox