const SEARCH = 'SEARCH';


let intialState = {
    search: '',
}


const Search_reducer = (state = intialState, action) => {

    switch (action.type) {


        case SEARCH: {
            return {...state,search:action.text}

        }
        default:
            return state
    }
}


export const SearchSuccess=(text)=>{
    return{
        type:SEARCH,
        text
    }
}

export default Search_reducer;

