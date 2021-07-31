import React from 'react'
import {compose} from "redux";
import Video from "./Video";
import {WithAuthRedirect} from "../../../Hoc/WithAuthRedirect";
import {connect} from "react-redux";
import {SearchSuccess} from "../../../Redux/Search-reducer";



let mapSatetoProps = (state) => {
    return {
        profile: state.profilePage.profile,
        Profile: state.profilePage.Posts,
    }
}

export default compose(
    connect(mapSatetoProps, {SearchSuccess}),
    WithAuthRedirect
)(Video)


