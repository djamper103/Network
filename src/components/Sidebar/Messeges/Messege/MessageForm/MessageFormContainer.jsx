import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import MessageForm from "./MessageForm"
import {AddMessegeActionCreator} from "../../../../../Redux/DialogsPage-reducer";


let mapSatetoProps = (state) => {
    return {
        NewMessegetext: state.DialogsPage.NewMessegetext,
    }
}

export default compose(
    connect(mapSatetoProps, {AddMessegeActionCreator}),
)(MessageForm)
