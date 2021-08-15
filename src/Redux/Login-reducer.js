const UPDATE_LOGIN_INFO="UPDATE-LOGIN-INFO"
const ADD_LOGIN_INFO="ADD-LOGIN-INFO"

let intialState={

    Login:[
        { login:"www",
            name:"name",
            secondName:"2name",
            password:"0000",
            confirmPassword:"0000",
            email:"1@gmail.com",
            confirmEmail:"1@gmail.com",
        },
    ],

    NewLogintext:"",
}

const Login_reducer=(state=intialState,action)=> {

    switch (action.type) {

        case ADD_LOGIN_INFO: {
            debugger
            let loginData = {

                login:action.data.login,
                name:action.data.name,
                secondName:action.data.secondName,
                password:action.data.password,
                confirmPassword:action.data.confirmPassword,
                email:action.data.email,
                confirmEmail:action.data.confirmEmail,
            }
            return{...state,
                NewLogintext:"",
                Login:[...state.Login,loginData]
            }
        }

        case UPDATE_LOGIN_INFO: {
            return {...state,NewLogintext: action.text}
        }

        default:
            return state
    }
}

export const  AddLoginInfoActionCreator=(data)=>{

    return{
        type:ADD_LOGIN_INFO,
        data
    }
}

export const UpdateLoginInfoActionCreator=(text)=>{
    
    return{
        type:UPDATE_LOGIN_INFO,
        text
    }
}

export default Login_reducer;