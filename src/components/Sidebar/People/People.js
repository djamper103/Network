import React from "react"
import style from "./People.module.css"
import User from "./Users/User";
import BasicPagination from "../../../Common/Paginator/Pagenation";


let Users = ({onPageChange, currentPage, users, followingProgress,
    FollowSuccess, UnFollowSuccess, totalUsersCount, pageSize}) => {

    return (
        <div className={style.usersPage}>

            <div className={style.pagination}>
                <h3>Users pagination</h3>
                <BasicPagination currentPage={currentPage} onPageChange={onPageChange}
                            totalUsersCount={totalUsersCount} pageSize={pageSize}/>
            </div>

            <div className={style.users}>
            {
                users.map(u => <User key={u.id} user={u} followingProgress={followingProgress}
                                    FollowSuccess={FollowSuccess} UnFollowSuccess={UnFollowSuccess}/>)
            }
            </div>

        </div>
    )
}

export default Users;