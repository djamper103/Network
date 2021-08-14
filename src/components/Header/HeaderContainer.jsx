import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {Logoutthunk} from "../../Redux/Auth-reducer";


class HeaderContainer extends React.Component {


    render() {
        return (
            <Header {...this.props}/>
        )
    }
}


let mapSatetoProps = (state) => {
    return {
        isAuth: state.AuthReducer.isAuth,
        login: state.AuthReducer.login,
        id: state.AuthReducer.id,
        email: state.AuthReducer.email,

    }
}


export default connect(mapSatetoProps, {Logoutthunk})(HeaderContainer)
