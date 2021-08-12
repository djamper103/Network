import {NavLink} from 'react-router-dom';
import style from './Sidebar.module.css'
import {
    BiMessageRounded,
    BiNews,
    CgProfile,
    FiUsers,
    MdSlowMotionVideo,
} from "react-icons/all";
import React from "react";
import userPhoto from "../../assets/images/default-avatar-profile-icon-male.jpg";

const Sidebar = ({profile,}) => {

    return (
        <div className={style.sidebar}>
            <div className={style.sidebarImg}>
                <NavLink to='/Profile'>
                    <img src={profile.photos.small != null ? profile.photos.small : userPhoto}/>
                    <h3>{profile.fullName ? profile.fullName :`Id:${profile.userId}`}</h3>
                </NavLink><br></br>

            </div>
            <div className={style.icon}>
                <NavLink to='/Profile'> <CgProfile/>&nbsp; Profile</NavLink><br></br>
                <NavLink to='/Messeges'><BiMessageRounded/>  &nbsp; Messages</NavLink><br></br>
                <NavLink to='/Users'><FiUsers/>  &nbsp; Users</NavLink><br></br>
                <NavLink to='/News'><BiNews/>  &nbsp; News</NavLink><br></br>
                <NavLink to='/Video'><MdSlowMotionVideo/>  &nbsp; Video</NavLink><br></br>
            </div>
        </div>

    )
}
export default Sidebar;
