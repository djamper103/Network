import style from './Profileinfo.module.css'
import StatusHook from "../Status/StatusHook";
import userPhoto from "../../../../assets/images/default-avatar-profile-icon-male.jpg";
import React,{useState} from "react";
import BasicPagination from "../../../../Common/Paginator/Pagenation";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";
import Tent from "../../../../assets/images/Tent.jpg";
import {NavLink} from "react-router-dom";
import {AiFillFacebook, AiOutlineMail, GrTwitter, MdPhotoCamera} from "react-icons/all";
import MypostsContainer from "../Myposts/MypostsContainer";



const Profileinfo = ({savePhoto, profile, status, UpdateThunk, isOwner,saveProfileDataThunk,}) => {


    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <BasicPagination/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

const onSubmitData=(data)=>{
    saveProfileDataThunk(data)
    setEditMode(false)

}

    return (
        <div className={style.ProfileInfo}>
        <div className={style.Tent}>
            <img src={Tent}/>
        </div>
            <div className={style.WhiteLine1}>
                <NavLink to='/Home'>Home</NavLink>
                <NavLink to='/Messeges'>Message</NavLink>
                <NavLink to='/News'>News</NavLink>

            </div>
            <div className={style.WhiteSquare}></div>
            <div className={style.WhiteLine2}>

                <div className={style.AddPhoto}> <a href="#">< MdPhotoCamera/> Add photo </a></div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <a href="https://www.google.com/intl/en/gmail/about/">Google</a>
                <a href="https://uk-ua.facebook.com/react/">Facebook</a>
                <a href="https://twitter.com/reactjs">Twitter</a>

            </div>
            <div className={style.WhiteLine3}>
                {editMode ?
                    <ProfileDataForm onSubmitData={onSubmitData} profile={profile} />
                    : <ProfileData profile={profile} status={status} isOwner={isOwner}
                                   editMode={()=>{setEditMode(true)}
                                   }
                    />
                }
            </div>
            <div className={style.WhiteLine4}>
                    <ul>
                        <li><a href="#">Somerhing About Me</a></li>
                        <li> <a href="#">Working Zone</a></li>
                        <li> <a href="#">Educational Qualification</a></li>
                        <li> <a href="#">Work & Education</a></li>
                        <li> <a href="#">Friends & Family</a></li>
                        <li> <a href="#">Contact Details</a></li>
                    </ul>

            </div>
            <div className={style.WhiteLine5}>

                <MypostsContainer profile={profile}/>
            </div>
        <div className={style.Profile}>
            <div>
                <img src={profile.photos.small != null ? profile.photos.small : userPhoto}/>
                <div className={style.Status}>
                <StatusHook status={status} UpdateThunk={UpdateThunk}/>
                </div>
            </div>
        </div>
        </div>
    )
}


export default Profileinfo;


