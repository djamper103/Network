import {LoginApi, SecurityApi, usersApi} from "../Api/Api";


const SET_USER_DATA = 'SET-USER-DATA'
const LOGIN_ERROR = 'LOGIN-ERROR'
const GET_CAPTCHA_URL = 'GET-CAPTCHA-URL'
const LOGOUT_Remove='LOGOUT_Remove'


let intialState = {
    userId: 15498,
    email: null,
    login: null,
    isAuth: false,
    error: false,
    captcha:null,

}

const Auth_reducer = (state = intialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...state.payload,
                isAuth: true,


            }
        }
        case LOGIN_ERROR: {
            return {
                ...state, error: action.message
            }
        }
        case GET_CAPTCHA_URL: {
            debugger
            return {
                ...state, captcha: action.url
            }
        }
        case LOGOUT_Remove:{
            debugger
            return {
                ...state,error:true
            }
        }

        default:
            return state
    }
}

export default Auth_reducer;

export const SetUserData = (Id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            Id, email, login, isAuth
        }
    }
}
export const logoutRemove = () => {
    debugger
    return {
        type: LOGOUT_Remove,
    }
}

export const loginError = (message) => {

    return {
        type: LOGIN_ERROR,
        message
    }
}
export const captchaUrl = (url) => {
    return {
        type: GET_CAPTCHA_URL,
        url
    }
}


export const Loginthunk = () => async (dispatch) => {
    let response = await usersApi.loginAxios()
    if (response.data.resultCode === 0) {
        let {Id, email, login,} = response.data.data;
        dispatch(SetUserData(Id, email, login, true))
    }

}
export const getCaptchathunk = () => async (dispatch) => {
    let response = await SecurityApi.securityCaptchaUrl()
    const captcha=response.data.url
    dispatch(captchaUrl(captcha))

}
export const Loginingthunk = (email, password, rememberMe,captcha) => async (dispatch) => {
    let response = await LoginApi.LoginAxios(email, password, rememberMe,captcha)
    if (response.data.resultCode === 0) {
        dispatch(Loginthunk())
    }else{
        if(response.data.resultCode === 10){
            dispatch(getCaptchathunk())
        }
        console.log('Error get captcha')
    }

}


export const Logoutthunk = () => async (dispatch) => {
    let response = await LoginApi.LogoutAxios()
    if (response.data.resultCode === 0) {
        dispatch(SetUserData(null, null, null, false))
        window.location.reload()
        // Наконец, метод this.forceUpdate может инициировать рендеринг. 

    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Login error";
        dispatch(loginError(message))
    }


}






