import './App.css';
import Footer from './components/Footer/Footer';
import UsersContainer from "./components/Sidebar/People/Users/UsersContainer";
import {Redirect, Route} from 'react-router-dom';
import MessegesContainer from "./components/Sidebar/Messeges/MessegesContainer";
import ProfileContainer from './components/Sidebar/Profile/ProfileContainer'
import HeaderContainer from "./components/Header/HeaderContainer";
import React from "react";
import LoginContainer from "./components/Login/LoginContainer";
import RegistrationContainer from "./components/Login/RegistrationContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializationthunk} from "./Redux/App-reducer";
import LoadingScreen from "./Common/Loading Screen";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import ProfileDataForm from "./components/Sidebar/Profile/Profileinfo/ProfileDataForm";
import NewsContainer from "./components/Sidebar/News/NewsContainer";
import VideoContainer from "./components/Sidebar/Video/VideoContainer";


;



class App extends React.Component {

    catchAllErrors=(reason,promise)=>{
       console.log("Some error")
    }

    componentDidMount() {
        this.props.initializationthunk()
        window.addEventListener("unhandledrejection",this.catchAllErrors)
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection",this.catchAllErrors)
    }

    render() {
        if (!this.props.initialized) {

            return <LoadingScreen/>
        }

        // if(this.props.isAuth){
        //     <Home/>
        // }else{
        //     <Redirect to='/Home'/>
        // }
            return (

                <div className='Content'>
                    <HeaderContainer/>
                     <div className='Maincontent'>
                        <SidebarContainer/>
                        <Route exact path='/Profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route exact path='/ProfileDataForm' render={() => <ProfileDataForm/>}/>
                        <Route exact path='/Messeges' render={() => <MessegesContainer/>}/>
                        <Route exact path='/Users' render={() => <UsersContainer/>}/>
                        <Route exact path='/News' render={() => <NewsContainer/>}/>
                        <Route exact path='/Video' render={() => <VideoContainer/>}/>
                         <Route exact path='/Login' render={() => <LoginContainer/>}/>
                        <Route exact path='/Registration' render={() => <RegistrationContainer/>}/>
                    </div>
                    <Footer/>
                </div>
            );
        }





}

let mapSatetoProps=(state)=>{
    return{
        initialized:state.AppReducer.initialized,



    }
}

export default  compose(connect(mapSatetoProps,{initializationthunk}))(App)
