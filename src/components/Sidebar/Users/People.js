import React from 'react'
import style from './Users.module.css'
import User from "./User";
import Pagenation from "../../../Common/Paginator/Pagenation";
import BasicPagination from "../../../Common/Paginator/Pagenation";


let Users = ({
                 onPageChange, currentPage, users, followingProgress,
                 FollowSuccess, UnFollowSuccess, totalUsersCount, pageSize
             }) => {

    return (

        <div>


            <BasicPagination currentPage={currentPage} onPageChange={onPageChange}
                        totalUsersCount={totalUsersCount} pageSize={pageSize}/>

            {


                users.map(u => <User key={u.id} user={u} followingProgress={followingProgress}
                                     FollowSuccess={FollowSuccess} UnFollowSuccess={UnFollowSuccess}/>)

            }
        </div>
    )

}


export default Users;