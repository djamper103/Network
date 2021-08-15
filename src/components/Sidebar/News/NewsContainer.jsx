import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../../Hoc/WithAuthRedirect";
import News from "./News";

let mapSatetoProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default compose(connect(mapSatetoProps, {}),WithAuthRedirect)(News)
