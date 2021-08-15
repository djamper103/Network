import React from "react";
import Messeges from "./Messeges"
import {AddMessegeActionCreator, UpdateMessegeActionCreator} from "../../../Redux/DialogsPage-reducer"
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../../Hoc/WithAuthRedirect";
import {compose} from "redux";


let mapSatetoProps = (state) => {

    return {
        DialogsPage: state.DialogsPage.Messeges,
        DialogsPeople: state.DialogsPage.Dialogs,
        NewMessegetext: state.DialogsPage.NewMessegetext,
        isAuth: state.AuthReducer.isAuth,
        profile: state.profilePage.profile,
    }
}

export default compose(
    connect(mapSatetoProps, {UpdateMessegeActionCreator, AddMessegeActionCreator}),
    WithAuthRedirect)(Messeges)




