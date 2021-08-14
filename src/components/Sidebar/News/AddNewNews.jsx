import React from "react";
import style from "./AddNewNews.module.css";
import userPhoto from "../../../assets/images/default-avatar-profile-icon-male.jpg";
import {BiLike, SiMinutemailer, TiMessages} from "react-icons/all";

export default function AddNewNews ({name, post,image}) {
    const like = Math.floor(Math.random() * 10);
    const messages = Math.floor(Math.random() * 10);
    const minutemailer = Math.floor(Math.random() * 10);

    return (
        <div>
            <div className={style.posts}>
                <div className={style.photo}>
                    <img src={image ? image: userPhoto}/>
                    <div className={style.name}>{name}
                    <p>20 min ago</p></div>
                </div>
                {
                    image?<div className={style.image}><img src={image}/></div>:null
                }
                <div className={style.post}>{post}</div>
                <div className={style.like}>
                    <a src='#'><BiLike/></a> {like} people like this
                    <a src='#'><TiMessages/> {messages}</a>
                    <a src='#'><SiMinutemailer/> {minutemailer}</a>
                </div>
            </div>
        </div>
    );
}