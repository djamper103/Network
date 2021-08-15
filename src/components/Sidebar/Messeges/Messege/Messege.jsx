import style from "./Messege.module.css"
import React from "react";
import userPhoto from "../../../../assets/images/default-avatar-profile-icon-male.jpg";


const Messege = ({id,messege,profile,name,image}) => {

    const messages = Math.floor(Math.random() * 10);

    return (
        <div className={style.messeges}>

            <div className={style.form}>

                <div className={style.formUp}>
                    <img src={image!= null ? image : profile.photos.small?profile.photos.small:userPhoto}/>
                    
                    <div className={style.name}>
                        {name}

                        <div className={style.messages}>
                            {messages} min ago
                        </div>
                        
                    </div>

                </div>

                <div className={style.messege}>{messege}</div>

            </div>

        </div>
    )
}

export default Messege;