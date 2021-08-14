import React from 'react'
import style from './Users.module.css'
import userPhoto from '../../../../assets/images/default-avatar-profile-icon-male.jpg'
import {NavLink} from "react-router-dom";


let User = ({user, followingProgress, FollowSuccess, UnFollowSuccess,}) => {


    return (

        <div className={style.users}>

          <div className={style.user}>
              <NavLink to={'/Profile/' + user.id}>
              <img src={user.photos.small != null ? user.photos.small : userPhoto}/>
              </NavLink>
              <div className={style.followed}>
                  {user.followed
                      ? <button disabled={followingProgress.some(id => id === user.id)} onClick={() =>
                          FollowSuccess(user.id)

                      }>Unfoloowed</button>
                      : <button disabled={followingProgress.some(id => id === user.id)} onClick={() =>
                          UnFollowSuccess(user.id)

                      }>Foloowed</button>}
              </div>

        </div>
            <div className={style.info}>
                <div>Name: {user.name}</div>
                <div>{user.status ? `Status: ${user.status}` : `Status: no status`}</div>
            </div>
        </div>


    )

}


export default User;