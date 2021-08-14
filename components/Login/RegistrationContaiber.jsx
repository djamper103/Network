import {connect} from "react-redux";
import * as React from "react";
import Registration from "./Registration";
import {UpdateNewName} from "../../Redux/Login-reducer";



class RegistrationContainer extends React.Component{



    render(){
        return(
            <Registration login={this.props.login} UpdateNewName={this.props.UpdateNewName}/>
        )
    }
}


let mapSatetoProps=(state)=>{
    return{
        login:state.LoginReducer.Login,

    }
}


export default connect(mapSatetoProps, {UpdateNewName})(RegistrationContainer)

