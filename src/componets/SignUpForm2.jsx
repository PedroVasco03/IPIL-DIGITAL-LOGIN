import React from "react";
import AreaBox from "./AreaBox"
import NumProcessBox from "./NumProcessBox"
import CourseBox from "./CourseBox"
import DegreBox from "./DegreBox"
import ClassBox from "./ClassBox"
import ButtonConfirm from "./ButtonConfirm";

function SignUpForm2(){
    return(
        <>
            <form action="" method="post"  className="sign-in-form">
                <h2 className="title">Cadastrar-se</h2>
                <NumProcessBox/>
                <AreaBox/>
                <CourseBox/>
                <DegreBox/>
                <ClassBox/>
                <ButtonConfirm value="cadastrar"/>
            </form>
        </>
    )
}

export default SignUpForm2