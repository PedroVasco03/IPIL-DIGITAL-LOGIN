import React from "react";

function ClassBox(){
    const [turma, setTurma] = React.useState('');
    return(
        <>
            <div className="input-field">
                <i className="bi-person-lines-fill"></i>
                    <select name="turma" value={turma} onChange={(event) => setTurma (event.target.value)}>
                        <option disabled value="">Selecione a turma</option>
                        <option value="...">...</option>
                    </select>
            </div>
        </>
    )
}

export default ClassBox