import style from "./Post.module.css"
import React from "react";
import userPhoto from "../../../../../assets/images/default-avatar-profile-icon-male.jpg";
import {BiLike, SiMinutemailer, TiMessages} from "react-icons/all";

const Post = ({name, post, profile,image}) => {

    const like = Math.floor(Math.random() * 10);
    const messages = Math.floor(Math.random() * 10);
    const minutemailer = Math.floor(Math.random() * 10);

    return (
            <div className={style.posts}>

                <div className={style.photo}>
                    <img src={profile.photos.small != null ? profile.photos.small : userPhoto}/>
                    <div className={style.name}>{name} <p>{messages} min ago</p></div>
                </div>

                <div className={style.postMain}>
                
                    {
                        image?<div className={style.image}><img src={image}/></div>:null
                    }
                    
                    <div className={style.post}>{post}</div>
                    
                    <div className={style.like}>
                        <a src="#"><BiLike/></a> {like} people like this
                        <a src="#"><TiMessages/> {messages}</a>
                        <a src="#"><SiMinutemailer/> {minutemailer}</a>
                    </div>

                </div>

            </div>
    );
}

export default Post;