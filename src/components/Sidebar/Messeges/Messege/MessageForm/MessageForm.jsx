import React from "react";
import {useForm} from "react-hook-form";
import style from "./MessageForm.module.css"
import userPhoto from "../../../../../assets/images/default-avatar-profile-icon-male.jpg";

const MessageForm = ({AddMessegeActionCreator,profile}) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => AddMessegeActionCreator(JSON.stringify(data.messege))

    return (

        <div className={style.Form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <img src={profile.photos.small != null ? profile.photos.small : userPhoto}/>
                    <input name="messege" ref={register} placeholder="write message"/>
                </div>
                <div>
                    <button type="submit">Add new message</button>
                </div>
            </form>
        </div>

    )
}

export default MessageForm;