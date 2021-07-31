import React from "react";
import {useForm} from "react-hook-form";
import style from "./MessageForm.module.css"


const MessageForm = ({AddMessegeActionCreator,}) => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => AddMessegeActionCreator(JSON.stringify(data.messege))

    return (

        <div className={style.Form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="messege" ref={register} placeholder="write message"/>
                <button type="submit">Add new message</button>
            </form>
        </div>

    )
}

export default MessageForm;