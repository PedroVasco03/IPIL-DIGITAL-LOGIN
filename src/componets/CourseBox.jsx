import React from "react";

function CourseBox(){
    const [curso, setCurso] = React.useState('');
    return(
        <>
            <div className="input-field">
                <i className="bi-bar-chart-steps"></i>
                    <select name="curso" value={curso} onChange={(event) => setCurso (event.target.value)}>
                        <option disabled value="">Selecione o curso</option>
                        <option value="ii">Técnico de Infor. {"(II)"}</option>
                        <option value="ig">Técnico de G.S. Infor. {"(IG)"}</option>
                    </select>
            </div>
        </>
    )
}

export default CourseBox