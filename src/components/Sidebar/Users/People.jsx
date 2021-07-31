import React from 'react'
import style from './Users.module.css'
import Pagenation from "../../../Common/Paginator/Pagenation";
import User from "./User";
import BasicPagination from "../../../Common/Paginator/Pagenation";


let Users = ({
                 onPageChange, currentPage, users, followingProgress,
                 FollowSuccess, UnFollowSuccess,
             }) => {

    return (

        <div className={style.Users}>


            <BasicPagination currentPage={currentPage} onPageChange={onPageChange}/>

            {

                users.map(u => <User key={u.id} user={u} followingProgress={followingProgress}
                                     FollowSuccess={FollowSuccess} UnFollowSuccess={UnFollowSuccess}/>)
            }
        </div>
    )

}


export default Users;