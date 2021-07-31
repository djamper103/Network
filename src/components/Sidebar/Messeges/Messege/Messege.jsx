import style from './Messege.module.css'
import React from "react";
import userPhoto from "../../../../assets/images/default-avatar-profile-icon-male.jpg";


const Messege = ({id,messege,profile,name,image}) => {
    const messages = Math.floor(Math.random() * 10);
    return (
        <div className={style.messeges}>

            <div className={style.Form}>
                <img src={image!= null ? image : profile.photos.small?profile.photos.small:userPhoto}/>
                <span>{name}</span>
                <div className={style.messege}>{messege}</div>
                <div className={style.MessagesTime}>
                    {messages} min ago
                </div>
            </div>


        </div>
    )
}

export default Messege;