import {connect} from "react-redux";
import Login from "./Login";
import * as React from "react";
import {Loginingthunk} from "../../Redux/Auth-reducer";


let mapSatetoProps = (state) => {
    return {
        isAuth: state.AuthReducer.isAuth,
        error: state.AuthReducer.error,
        captcha: state.AuthReducer.captcha,


    }
}


export default connect(mapSatetoProps, {Loginingthunk})(Login)

