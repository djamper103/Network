import React from "react";
import style from './ProfileData.module.css'

const ProfileData=({profile,status,isOwner,editMode})=>{

    return(

        <div className={style.profileData}>
            <h3>{profile.fullName ? profile.fullName :"I don't have a name only Id" }</h3>
            <ul>
                <li>{'My name:   '}{profile.fullName ? profile.fullName :"I don't have a name only Id" }</li>
                <li>{'userId:   '}{profile.userId? profile.userId :"I don't have even Id"}</li>
                <li> {'Job:   '}{profile.lookingForAJob ? profile.lookingForAJobDescription:"No i'm not looking for a job"}</li>
                <li>{'About me :   '}{profile.aboutMe ? profile.aboutMe: "I'm not, you were wrong" }</li>
                <li>{'github:   '}{profile.contacts.github ? profile.contacts.github: "github.com..." }</li>
                <li>{'vk:   '}{profile.contacts.vk ? profile.contacts.vk: "vk.com..." }</li>
                <li>{'facebook:   '}{profile.contacts.facebook ? profile.contacts.facebook: "facebook.com..." }</li>
                <li>{'instagram:   '}{profile.contacts.instagram ? profile.contacts.instagram: "instagram.com..." }</li>
                <li>{'twitter:   '}{profile.contacts.twitter ? profile.contacts.twitter: "twitter.com..." }</li>
                <li>{'website:   '}{profile.contacts.website ? profile.contacts.website: "website.com..." }</li>
                <li>{'youtube:   '}{profile.contacts.youtube ? profile.contacts.youtube: "youtube.com..." }</li>
                <li>{'mainLink:   '}{profile.contacts.mainLink ? profile.contacts.mainLink: "mainLink.com..." }</li>
            </ul>
        </div>
    )

}
export default ProfileData;