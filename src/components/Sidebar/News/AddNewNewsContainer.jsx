import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {WithAuthRedirect} from "../../../Hoc/WithAuthRedirect";
import AddNewNews from "./AddNewNews";


function AddNewNewsContainer({Profile,profile}){

    let Statement = Profile.map(dialog => (
        <AddNewNews name={dialog.Name} post={dialog.post} like={dialog.like} key={dialog.id}
            profile={profile} image={dialog.image}/>))
            
    return(
        <div>
            {Statement}
        </div>
    )
}

let mapSatetoProps = (state) => {

    return {
        profile: state.profilePage.profile,
        Profile: state.profilePage.Posts,
    }
}

export default compose(connect(mapSatetoProps, {}),WithAuthRedirect)(AddNewNewsContainer)
