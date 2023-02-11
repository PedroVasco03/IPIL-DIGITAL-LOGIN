import React from "react";
function deteta (e){
        const Code = (e.charCode ? e.charCode : e.wich);
        if(Code < 40 || Code > 58){
            e.preventDefault()
        }
    }

function PhoneBox(){
    const [telefone, setTelefone] = React.useState('');
    return(
        <>
            <div className="input-field">
                <i className="bi-phone-fill"></i>
                <input 
                    type="text" 
                    name="mailnew" 
                    placeholder="Telefone"
                    value={telefone}
                    onKeyPress={deteta}
                    onChange={(event) => setTelefone (event.target.value)}
                />
            </div>
        </>
    )
}

export default PhoneBox