import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import Home from "./HomePage";
import {WithAuthRedirect} from "../../../Hoc/WithAuthRedirect";


let mapSatetoProps = (state) => {
    return {}
}

export default compose(
    connect(mapSatetoProps, {}),
    WithAuthRedirect
)(Home)
