import nature from "../assets/images/mountains.jpg";
import lake from "../assets/images/158842813619331512.jpg";
import sea from "../assets/images/mesmerising-views-unforgettabl.jpg";

const ADD_MESSEGE = 'ADD-MESSEGE'
const UPDATE_NEW_MESSEGE_TEXT = 'UPDATE-NEW-MESSEGE-TEXT'

let intialState = {
    Dialogs: [
        {id: "1", name: "Dima",},
        {id: "7", name: "Vova",},
        {id: "2", name: "Vasy",}
    ],
    Messeges: [
        {id: "1",name: "Dima", messege: "Hi", image:nature},
        {id: "1",name: "Vova", messege: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "sed do eiusmod tempor incididunt ut labore et dolore.\n" +
                "magna aliqua.",image:lake},
        {id: "1",name: "Vasy", messege: "Ut enim ad minim veniam, quis nostrud\n" +
                "exercitation ullamco laboris nisi ut aliquip ex ea\n" +
                "commodo consequat.",image:sea},

    ],
    NewMessegetext: ''
}
const DialogPage_reducer = (state = intialState, action) => {

    switch (action.type) {
        case ADD_MESSEGE: {
            let newmessege = {
                id: '4',
                messege: action.text.replace(/^[^"]*"|".*/g, ''),
            }
            return {
                ...state,
                NewMessegetext: '',
                Messeges: [...state.Messeges, newmessege]
            }
        }

        case UPDATE_NEW_MESSEGE_TEXT: {
            return {...state, NewMessegetext: action.text}
        }
        default:
            return state


    }
}
export const AddMessegeActionCreator = (text) => {

    return {

        type: ADD_MESSEGE,
        text: text
    }
}
export const UpdateMessegeActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSEGE_TEXT,
        text: text
    }
}


export default DialogPage_reducer;