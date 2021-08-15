import React from "react";
import {AddPostActionCreator} from "../../../../../../Redux/ProfilePage-reducer"
import {connect} from "react-redux";
import {compose} from "redux";
import PostForm from "./PostForm";


let mapSatetoProps = (state) => {
    return {
        profile: state.profilePage.profile,
        Newtext: state.profilePage.Newtext,
    }
}
export default compose(
    connect(mapSatetoProps, {AddPostActionCreator}),
)(PostForm)

