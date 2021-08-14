import React from 'react';
import Myposts from './Myposts'
import {AddPostActionCreator} from '../../../../Redux/ProfilePage-reducer'
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../../../../Hoc/WithAuthRedirect";


let mapSatetoProps = (state) => {
    return {
        profile: state.profilePage.profile,
        Profile: state.profilePage.Posts,
        Newtext: state.profilePage.Newtext
    }

}
export default compose(
    connect(mapSatetoProps, {AddPostActionCreator}),
    WithAuthRedirect
)(Myposts)


// const MypostsContainer=connect(mapSatetoProps, { UpdatePostActionCreator,AddPostActionCreator})(Myposts);
//
// export default MypostsContainer;