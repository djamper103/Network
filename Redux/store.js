import {applyMiddleware, combineReducers, createStore} from "redux"
import DialogPage_reducer from './DialogsPage-reducer'
import Profile_reducer from './ProfilePage-reducer'
import Users_reducer from  './Users-reducer'
import Auth_reducer from './Auth-reducer'
import thunkMiddleware from "redux-thunk";
import App_reducer from "./App-reducer";
import Search_reducer from "./Search-reducer";



let redusers=combineReducers({
    profilePage:Profile_reducer,
    DialogsPage:DialogPage_reducer,
    UsersPage:Users_reducer,
    AuthReducer:Auth_reducer,
    AppReducer:App_reducer,
    SearchReducer:Search_reducer,
})

let store=createStore(redusers,applyMiddleware(thunkMiddleware));

window.store=store

export default store;