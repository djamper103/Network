import {NavLink} from 'react-router-dom';
import style from './Sidebar.module.css'
import {
    BiMessageRounded,
    BiNews,
    CgProfile,
    FiUsers,
    IoHomeSharp,
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
                {/*<span><NavLink to='/Home'> <IoHomeSharp/>&nbsp; Home</NavLink><br></br></span>*/}
                <NavLink to='/Profile'> <CgProfile/>&nbsp; Profile</NavLink><br></br>
                <NavLink to='/Messeges'><BiMessageRounded/>  &nbsp; Messeges</NavLink><br></br>
                <NavLink to='/Users'><FiUsers/>  &nbsp; Users</NavLink><br></br>
                <NavLink to='/News'><BiNews/>  &nbsp; News</NavLink><br></br>
                <NavLink to='/Video'><MdSlowMotionVideo/>  &nbsp; Video</NavLink><br></br>
            </div>
        </div>

    )
}
export default Sidebar;
