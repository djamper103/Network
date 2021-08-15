import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Registration from "./Registration";


let mapSatetoProps = (state) => {
    return {}
}

export default compose(connect(mapSatetoProps, {}),)(Registration)
