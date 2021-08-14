import style from './Profile.module.css'
import Profileinfo from './Profileinfo/Profileinfo'
import MypostsContainer from "./Myposts/MypostsContainer";
import React from "react";


const Profile = ({profile,status,UpdateThunk,savePhoto,isOwner,saveProfileDataThunk}) => {
    return (
        <div className={style.maincontent}>
            <Profileinfo savePhoto={savePhoto}
                         isOwner={isOwner}
                profile={profile} status={status} UpdateThunk={UpdateThunk}
                         saveProfileDataThunk={saveProfileDataThunk}
                         />

        </div>
    )
}
export default Profile;