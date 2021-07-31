import React from 'react'
import style from './People.module.css'
import User from "./Users/User";
import BasicPagination from "../../../Common/Paginator/Pagenation";


let Users = ({
                 onPageChange, currentPage, users, followingProgress,
                 FollowSuccess, UnFollowSuccess, totalUsersCount, pageSize
             }) => {

    return (

        <div className={style.UsersPage}>

            <div className={style.Pagination}>
                <h3>Pagination</h3>
                <BasicPagination currentPage={currentPage} onPageChange={onPageChange}
                             totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            </div>

            <div>
            {
                users.map(u => <User key={u.id} user={u} followingProgress={followingProgress}
                                     FollowSuccess={FollowSuccess} UnFollowSuccess={UnFollowSuccess}/>)
            }
            </div>
        </div>
    )

}


export default Users;