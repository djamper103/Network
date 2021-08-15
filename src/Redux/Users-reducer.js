import {usersApi} from "../Api/Api";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS"
const SETCURRENTPAGE = "SETCURRENTPAGE"
const SETTOTELUSERSCOUNT = "SETTOTELUSERSCOUNT"
const FOLLOWING_PROGRESS = "FOLLOWING-PROGRESS"

let intialState = {
    users: [],
    pageSize: 9,
    totalUsersCount: 0,
    currentPage: 1,
    followingProgress: [],
    isFetching: false,
    page: []
}

const Users_reducer = (state = intialState, action) => {

    switch (action.type) {

        case SETUSERS: {
            return {
                ...state, users: action.user
            }
        }

        case FOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        }

        case SETCURRENTPAGE: {
            return {
                ...state, currentPage: action.page
            }
        }

        case SETTOTELUSERSCOUNT: {
            return {
                ...state, totalUsersCount: action.count
            }
        }

        case FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingProgress: action.follow ? [...state.followingProgress, action.userid]
                    : state.followingProgress.filter(id => id != action.userid)
            }
        }

        default:
            return state
    }
}

export default Users_reducer;

export const Follow = (userid) => {

    return {
        type: FOLLOW,
        userid: userid
    }
}
export const UnFollow = (userid) => {
    return {
        type: UNFOLLOW,
        userid: userid
    }
}

export const SetUsers = (user) => {
    return {
        type: SETUSERS,
        user: user
    }
}

export const SetCurrentPage = (page) => {
    return {
        type: SETCURRENTPAGE,
        page: page
    }
}

export const SetTotalUsersCount = (count) => {
    return {
        type: SETTOTELUSERSCOUNT,
        count: count
    }
}

export const FollowingProgress = (follow, userid) => {
    return {
        type: FOLLOWING_PROGRESS,
        follow, userid
    }
}

export const UsersThunk = (currentPage, pageSize) => async (dispatch) => {

    let response = await usersApi.getUsers(currentPage, pageSize)

    dispatch(SetUsers(response.items))
    dispatch(SetTotalUsersCount(response.totalCount))
}

export const CurrentPageThunk = (pageNumber, pageSize) => async (dispatch) => {

    let response = await usersApi.getUsers(pageNumber, pageSize)

    dispatch(SetCurrentPage(pageNumber))
    dispatch(SetUsers(response.items))
}

const followUnollowFlow=async (dispatch,userId,apiMethod,actionCreator)=>{

    let response = await apiMethod(userId)
    
    dispatch(FollowingProgress(true, userId))

    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(FollowingProgress(false, userId))
}

export const FollowSuccess = (userId) => async (dispatch) => {
    followUnollowFlow(dispatch, userId, usersApi.unFollowAxios.bind(userId),UnFollow)
}

export const UnFollowSuccess = (userId) => async (dispatch) => {
    followUnollowFlow(dispatch, userId, usersApi.followAxios.bind(userId),Follow)
}



