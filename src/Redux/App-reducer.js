
import {Loginthunk} from "./Auth-reducer";


const INITIALIZED_SUCCESS="SET-SUCCESS"

let intialState = {
    initialized:false,
}

const App_reducer=(state=intialState,action)=>{

    switch (action.type) {
        
        case INITIALIZED_SUCCESS:{
            return {
                ...state,
                initialized:true
            }
        }
        default:
            return state
    }
}

export const initializedSuccessActionCreator = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}

export const initializationthunk= () =>(dispatch)=>{

    let promise=dispatch(Loginthunk())

    promise.then(()=>{
        dispatch(initializedSuccessActionCreator())
    })
}

export default App_reducer;







