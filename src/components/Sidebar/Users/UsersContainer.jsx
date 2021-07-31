import React from 'react';
import {Follow,UnFollow,SetCurrentPage,FollowingProgress,UsersThunk,CurrentPageThunk,FollowSuccess,UnFollowSuccess} from '../../../Redux/Users-reducer'
import {connect} from 'react-redux';
import Users from './People';
import {WithAuthRedirect} from "../../../Hoc/WithAuthRedirect";
import {compose} from "redux";



class UsersContainer1 extends  React.Component{

    componentDidMount() {
        this.props.UsersThunk(this.props.currentPage,this.props.pageSize)
    }
    onPageChange=(pageNumber)=> {
        this.props.CurrentPageThunk(pageNumber)
    }

    render(){
        return(
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChange={this.onPageChange}
                   users={this.props.users}
                   FollowingProgress={this.props.FollowingProgress}
                   followingProgress={this.props.followingProgress}
                   UnFollowSuccess={this.props.UnFollowSuccess}
                   FollowSuccess={this.props.FollowSuccess}
                   isAuth={this.props.isAuth}
            />
        )

    }
}

let mapSatetoProps=(state)=>{
    return{
        users:state.UsersPage.users,
        pageSize:state.UsersPage.pageSize,
        totalUsersCount:state.UsersPage.totalUsersCount,
        currentPage:state.UsersPage.currentPage,
        followingProgress:state.UsersPage.followingProgress,
        isAuth: state.AuthReducer.isAuth,

    }
}

export default  compose(
    WithAuthRedirect,
    connect(mapSatetoProps, {Follow, UnFollow,  SetCurrentPage, FollowingProgress,UsersThunk,CurrentPageThunk,FollowSuccess,UnFollowSuccess}),
)(UsersContainer1)








// let AuthRedirectComponent=WithAuthRedirect(UsersContainer1)
//     (props)=>{
//     if(!props.isAuth){
//         return <Redirect to={'/Login'}/>
//     }
//     return< UsersContainer1{...props} />
// }
// const UsersContainer=connect(mapSatetoProps,//Передаем вместо метода mapDispatchToprops с ActionCreator:FollowAC:(user)=>{
// // dispatch(Follow(user))},сокращенно до FollowAC:Follow и до Follow
//     {Follow, UnFollow,  SetCurrentPage, FollowingProgress,UsersThunk,CurrentPageThunk,FollowSuccess,UnFollowSuccess})(AuthRedirectComponent)
// export default UsersContainer;