import React from "react";

function GenderField(){
    const [sexo, setSexo] = React.useState('');
    function handleChangue({target}){
        setSexo(target.value);
    }
    return(
        <>
                <div className="gender-field"  onChange={(event) => setSexo (event.target.value)}>
                    <p>Sexo</p>
                    <div className="radio-field" >
                        <label htmlFor="masculino" >Masculino</label>
                        <input 
                            type="radio" 
                            value="masculino"
                            id="masculino"
                            checked={sexo === 'masculino'}
                            onChange={handleChangue}
                        />
                        <label htmlFor="feminino">Feminino</label>
                        <input 
                            type="radio" 
                            id="feminino"
                            value="feminino"
                            checked={sexo==='feminino'}
                            onChange={handleChangue}
                        />
                    </div>
                </div>
            {sexo}
        </>
    )
}

export default GenderField