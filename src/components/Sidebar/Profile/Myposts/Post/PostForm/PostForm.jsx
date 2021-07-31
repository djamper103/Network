import React from "react";
import {useForm} from "react-hook-form";
import style from "./PostForm.module.css"

const PostForm = ({AddPostActionCreator,}) => {

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => AddPostActionCreator(data)


    return (

        <div className={style.Form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="post" ref={register} placeholder="Say something" />
                <button type="submit">Share</button>
            </form>

        </div>

    )
}

export default PostForm;