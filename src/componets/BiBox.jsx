import React from "react";

function BiBox(){
    const [numbi, setNumBi] = React.useState('');
    return(
        <>
            <div className="input-field">
                <i className="bi-card-heading"></i>
                <input 
                    type="email" 
                    name="mailnew" 
                    placeholder="Bilhete de identidade" 
                    value={numbi}
                    onChange={(event) => setNumBi (event.target.value)}
                />
            </div>
        </>
    )
}

export default BiBox