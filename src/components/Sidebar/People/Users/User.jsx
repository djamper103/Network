import React from 'react'
import style from './Users.module.css'
import userPhoto from '../../../../assets/images/default-avatar-profile-icon-male.jpg'
import {NavLink} from "react-router-dom";


let User = ({user, followingProgress, FollowSuccess, UnFollowSuccess,}) => {


    return (

        <div className={style.User}>

          <span className={style.User}>
              <NavLink to={'/Profile/' + user.id}>
              <div><img src={user.photos.small != null ? user.photos.small : userPhoto}/></div>
              </NavLink>
              <div>
                  {user.followed
                      ? <button disabled={followingProgress.some(id => id === user.id)} onClick={() =>
                          FollowSuccess(user.id)

                      }>Unfoloowed</button>
                      : <button disabled={followingProgress.some(id => id === user.id)} onClick={() =>
                          UnFollowSuccess(user.id)

                      }>Foloowed</button>}
              </div>

          </span>
            <span>
                  <span>
                      <div>Name: {user.name}</div>

                  </span>
                  <span>

                      <div>{user.status ? `Status: ${user.status}` : `Status: no status`}</div>
                  </span>
              </span>
        </div>


    )

}


export default User;