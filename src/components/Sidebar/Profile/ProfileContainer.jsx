import React from "react"
import {connect} from "react-redux";
import {GetUsersProfile,GetUsersProfileThunk,GetStatusThunk,
    UpdateThunk, savePhoto, saveProfileDataThunk,
} from "../../../Redux/ProfilePage-reducer";
import Profile from "./Profile"
import withRouter from "react-router-dom/es/withRouter";
import {WithAuthRedirect} from "../../../Hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer1 extends React.Component {

    refreshProfile() {

        let userId= this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }

        if (!userId) {
            console.error("ID should exists in URI params or in state ('authorizedUserId')");
        } else {
            this.props.GetUsersProfileThunk(userId)
            this.props.GetStatusThunk(userId)
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}
                UpdateThunk={this.props.UpdateThunk} saveProfileDataThunk={this.props.saveProfileDataThunk}
            />
        )
    }
}

let mapSatetoProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.AuthReducer.userId,
        isAuth: state.AuthReducer.isAuth,
    }
}

export default compose(
    connect(mapSatetoProps, {GetUsersProfile, GetUsersProfileThunk, GetStatusThunk,
    UpdateThunk,savePhoto,saveProfileDataThunk}),
    withRouter,WithAuthRedirect)(ProfileContainer1)


// let AuthRedirectComponent=WithAuthRedirect(ProfileContainer1)
// let WithUrlDataContainerComponent=withRouter(AuthRedirectComponent)
// //Оборачиваем презинтационную(чистую)компоненту(Profile)  контейнерной (withUrlDataContainerComponent)
// //для передачи данных с сервера . Далее оборачиваем (withUrlDataContainerComponent) еще одной
// // контейнерной компонентой (ProfileContainer1)  с помощью connect (Profile) для передачи данных с store.
// const ProfileContainer=connect(mapSatetoProps, {SetUsersProfile,SetUsersProfileThunk})(WithUrlDataContainerComponent)
// export default ProfileContainer;
// //Передаем вместо метода mapDispatchToprops с редьюсарами ActionCreator:FollowAC:(user)=>{
// // dispatch(Follow(user))},сокращенно до FollowAC:Follow и до Follow