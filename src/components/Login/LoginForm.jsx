import React from "react";


const LoginForm = (props) => {
    return (
        <div>
            <form>
                <div><input placeholder={"Login"}/></div>
                <div><input placeholder={"Password"}/></div>
                <div><input type={"checkbox"}/>Remember me</div>
                <div>
                    <button>Login</button>
                </div>

            </form>


        </div>
    )
}

export default LoginForm;