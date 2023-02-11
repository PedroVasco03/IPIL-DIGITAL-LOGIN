import React from "react";

function AreaBox(){
    const [area, setArea] = React.useState('');
    return(
        <>
            <div className="input-field">
                <i className="bi-text-paragraph"></i>
                <select
                    value={area} 
                    onChange={({target}) => setArea (target.value)} 
                    id="area"
                >
                    <option disabled value="">Selecione a área</option>
                    <option value="construcao_civil">Construção Civil</option>
                    <option value="eletricidade">Eletricidade</option>
                    <option value="informatica">Informática</option>
                    <option value="mecanica">Mecanica</option>
                    <option value="quimica">Química</option>
                </select>
            </div>
        </>
    )
}

export default AreaBox