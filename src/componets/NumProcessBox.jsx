import React from "react";

function NumProcessBox(){
    const [numprocesso, setNumProcesso] = React.useState('');
    return(
        <>
            <div className="input-field">
                <i className="bi-123"></i>
                <input 
                    type="number" 
                    name="processnumber" 
                    placeholder="Número de Processo" 
                    value={numprocesso}
                    onChange={(event) => setNumProcesso (event.target.value)}
                />
            </div>
        </>
    )
}

export default NumProcessBox