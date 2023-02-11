import React from "react";
import {validateEmail} from "./utils/regex"
//import useForm from "../Hooks/useForms";
function EmailBox(){
    const [email, setEmail] = React.useState('');
    const [emailErr, setEmailErr] = React.useState(false);

    const validate = () => {
        if(!validateEmail.test(email)){
            setEmailErr(true)
        }else{
            setEmailErr(false)
        }
    }

    return(
        <>
            <div className="input-field">
                <i className="bi-envelope-fill"></i>
                <input 
                    required
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(event) =>{ 
                        setEmail(event.target.value)
                        setEmailErr(false)
                    }}
                    onBlur={validate}
                />
            </div>
            {emailErr && <p>Por favor  digite um email válido</p>}
        </>
    )
}

export default EmailBox