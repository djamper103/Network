import React from "react";
import style from "./WhiteLine1.module.css";
import background from "../../../../assets/images/zvezdnoe_nebo_oblaka_zakat.jpg";
import userPhoto from "../../../../assets/images/default-avatar-profile-icon-male.jpg";


export  default  function WhiteLine1({profile}) {

    return(
        <div className={style.WhiteLine1}>
            <div className={style.background}><img src={background}/></div>
            <div className={style.photo}><img
                src={profile.photos.small != null ? profile.photos.small : userPhoto}/></div>
            <div className={style.name}>{profile.fullName?profile.fullName:<p>Full Name</p>}</div>
            <p>Anyone can join us on the social network, if you want.We are glad to each of you</p>
        </div>
    )
}