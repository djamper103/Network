
export  let getUsers=(state)=>{

    return state.UsersPage.users
}

export let  getPageSize=(state)=>{
    return state.UsersPage.pageSize
}

export let  getTotalUsersCount=(state)=>{
    return state.UsersPage.totalUsersCount
}

export let  getCurrentPage=(state)=>{
    return state.UsersPage.currentPage
}

export let  getFollowingProgress=(state)=>{
    return state.UsersPage.followingProgress
}

export let  getIsAuth=(state)=>{
    return state.AuthReducer.isAuth
}

