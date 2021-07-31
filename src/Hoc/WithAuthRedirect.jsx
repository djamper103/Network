import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapSatetoPropsForRedurect=(state)=>{
    return{
        isAuth: state.AuthReducer.isAuth,

    }
}

export const  WithAuthRedirect=(Component)=>{
    class RedirectComponent extends  React.Component{
        render() {
            if(!this.props.isAuth) return <Redirect to={"/Login"}/>
            return <Component{...this.props}/>
        }
    }



    let ConnectedAuthRedirectComponent=connect(mapSatetoPropsForRedurect)(RedirectComponent)


    return ConnectedAuthRedirectComponent

}
// export default WithAuthRedirect;