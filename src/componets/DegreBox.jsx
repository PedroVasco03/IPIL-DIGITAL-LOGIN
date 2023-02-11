import React from "react";

function DegreBox(){
    const [classe, setClasse] = React.useState('');
    return(
        <>
            <div className="input-field">
                <i className="bi-text-indent-right"></i>
                    <select name="className" value={classe} onChange={(event) => setClasse (event.target.value)}>
                        <option disabled value="">Selecione a classe</option>
                        <option value="10">10ª classe</option>
                        <option value="11">11ª classe</option>
                        <option value="12">12ª classe</option>
                        <option value="13">13ª classe</option>
                    </select>
                </div>
        </>
    )
}

export default DegreBox