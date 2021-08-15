import React from "react"
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {compose} from "redux";
import Sidebar from "./Sidebar";


let mapSatetoProps = (state) => {
    return {
        profile: state.profilePage.profile,
        authorizedUserId: state.AuthReducer.userId,
        isAuth: state.AuthReducer.isAuth,
    }
}

export default compose(connect(mapSatetoProps, {}),WithAuthRedirect)(Sidebar)


