import {ProfileApi} from "../Api/Api";
import lake from "../assets/images/158842813619331512.jpg"
import sea from "../assets/images/mesmerising-views-unforgettabl.jpg"
import nature from  "../assets/images/mountains.jpg"


const ADD_POST="ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";
const GET_USERS_PROFILE="GET-USERS-PROFILE";
const SET_STATUS="GET-STATUS"
const SAVE_PHOTO_SUCCESS="SAVE-PHOTO-SUCCESS"

let intialState = {
    Posts: [
        {Name: "Vlad", post: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "sed do eiusmod tempor incididunt ut labore et dolore\n" +
                "magna aliqua. Ut enim ad minim veniam, quis nostrud\n" +
                "exercitation ullamco laboris nisi ut aliquip ex ea\n" +
                "commodo consequat.", id: "1", like: "1",image:sea},
        {Name: "Dima", post: "Hi", id: "1", like: "1",image:lake },
        {Name: "Oly", post: "React components allow you to split your user interface" +
                " into separate parts. React components can be declared by subclassing React." +
                "Component or React.PureComponent.", id: "1", like: "1",image:nature},
    ],

    Newtext: "",

    profile: {
        photos: {
            large: null,
            small: null
        },
        aboutMe: null,
        fullName: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
    },

    status: "Hello",
}

const Profile_reducer=(state=intialState,action)=>{

    switch (action.type) {

        case ADD_POST: {
            let newpost = {
                Name:"Gleb",
                post: action.text.post,
                id: "4",
                like: "1",
            }
            return{...state,
                Newtext:"",
                Posts:[...state.Posts,newpost]
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {...state,Newtext:action.text}
        }

        case GET_USERS_PROFILE:{
            return {...state, profile: action.profile}
        }

        case SET_STATUS:{
            return{...state,status:action.status}
        }

        case SAVE_PHOTO_SUCCESS:{
            return {...state, profile: {...state.profile, photos: action.photos}
        }
        }

        default:
            return state
    }
}

export default Profile_reducer;

export const  AddPostActionCreator=(text)=>{

    return{
            type:ADD_POST,
            text:text,
    }
}

export const UpdatePostActionCreator=(text)=>{

    return{
            type:UPDATE_NEW_POST_TEXT,
            text:text
    }
}

export const GetUsersProfile=(profile)=>{

    return{
        type:GET_USERS_PROFILE,
        profile
    }
}

export const SetStatus=(status)=>{

    return{
        type:SET_STATUS,
        status
    }
}
export const savePhotoSuccess=(photos)=>{

    return{
        type:SAVE_PHOTO_SUCCESS,
        photos
    }
}

export const GetUsersProfileThunk = (userId)=> async (dispatch) => {
    const response = await ProfileApi.getProfile(userId)
    dispatch(GetUsersProfile(response.data))
}

export const GetStatusThunk = (userId) => async (dispatch) => {
    let response = await ProfileApi.getStatusAxios(userId)
    dispatch(SetStatus(response.data))
}

export const UpdateThunk = (status) => async (dispatch) => {

    let response = await ProfileApi.updateStatusAxios(status)

    if (response.data.resultCode === 0) {
        dispatch(SetStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {

    let response = await ProfileApi.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfileDataThunk = (profile) => async (dispatch,getState) => {

        const userId=getState().AuthReducer.userId
        let response = await ProfileApi.saveProfileData(profile)

        if (response.data.resultCode === 0) {
            dispatch(GetUsersProfileThunk(userId))
        }
}







