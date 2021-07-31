const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let intialState = {
    Posts: [
        {Name: "Dima", post: "Hi", id: "1", like: '1'},
        {Name: "Oleg", post: "Bye", id: "2", like: '5'},
        {Name: "Vasy", post: "Yo", id: "3", like: '22'}
    ],
    Newtext: ''
}


const Profile_reducer = (state = intialState, action) => {

    switch (action.type) {


        case ADD_POST: {
            let newpost = {
                Name: 'Gleb',
                post: action.text,
                id: '4',
                like: '1',
            }
            return {
                ...state,
                Newtext: '',
                Posts: [...state.Posts, newpost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, Newtext: action.text}
        }
        default:
            return state
    }
}

export default Profile_reducer;

